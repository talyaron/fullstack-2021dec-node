import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { allGuidesAsync } from "./guideAPI";
import { GuideDetails } from "./guideSlice";

export interface AllGuides{
    guides: GuideDetails[],
    status: "idle" | "loading" | "failed",
};

const initialState:AllGuides = {
    guides: [],
    status: 'idle',
}

const allGuidesSlice = createSlice({
    name: 'allGuides',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allGuidesAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(allGuidesAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                // const {guides} = action.payload
                state.guides = action.payload
            })
            .addCase(allGuidesAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
});

export const selectedAllGuides = (state: RootState) => state.allGuides.guides;
export const selectedAllStatus = (state: RootState) => state.allGuides.status;
export default allGuidesSlice.reducer