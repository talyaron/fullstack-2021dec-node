import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { getMyJoke } from "./textAPI";


export interface TextState {
    text: string;
    status: "idle" | "loading" | "failed";
}
  
const initialState: TextState = {
    text: "",
    status: "idle",
};

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
       changeText: (state, action) => {
        state.text = action.payload;
       }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getMyJoke.pending, (state) => {
               state.status = "loading";
            })
            .addCase(getMyJoke.fulfilled, (state, action: PayloadAction<string>) =>{
               state.status = "idle";
               state.text = action.payload;
            })
            .addCase(getMyJoke.rejected, (state, action) =>{
               state.status = "failed";
            })
    },


});

export const { changeText } = textSlice.actions;

export const textSelector = (state: RootState) => state.text.text;
export const statusSelector = (state: RootState) => state.text.text;

export default textSlice.reducer;
