import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { addGuid } from "./guideAPI";

export interface GuideDetails{
    fullName: string,
    country: string,
    city: string,
    telephon: number,
    email: string, 
    image: any,
}

export interface GuideState{
    guides: GuideDetails | null,
    status: "idle" | "loading" | "failed";
};

const initialState: GuideState = {
    guides: null,
    status: 'idle',
  };

export const guideSlice = createSlice({
    name: 'guides',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addGuid.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addGuid.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle'
                const {guide} = action.payload
                state.
            })
            .addCase(addGuid.rejected, (state) => {
                state.status = 'failed';
            })
    }
})

export const selectedGuid = (state: RootState) => state.guides.guides
