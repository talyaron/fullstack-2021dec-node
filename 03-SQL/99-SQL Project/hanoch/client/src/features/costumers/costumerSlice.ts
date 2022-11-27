import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AddCostumerAsync } from "./costumerAPI";


export interface CostumerDetails{
    fullname: string,
    telephon: string,
    email: string,
    password: string
};

export interface CostumerState{
    costumer: CostumerDetails | null,
    status: "idle" | "loading" | "failed",
};

const initialState: CostumerState = {
    costumer: null,
    status: "idle"
};

const costumerSlice = createSlice({
    name: 'costumers',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(AddCostumerAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(AddCostumerAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle'
                const {costumer} = action.payload;
                state.costumer = costumer
            })
            .addCase(AddCostumerAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
});

export default costumerSlice.reducer;
export const selectedCostumer:any = (state: RootState) => state.costumers.costumer;
export const selectedCostumerStatus = (state: RootState) => state.costumers.status;

