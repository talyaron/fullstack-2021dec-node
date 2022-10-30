import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { getJoke } from "./textAPI";

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
    //action
    changeText: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJoke.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getJoke.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "idle";
        state.text = action.payload;
      })
      .addCase(getJoke.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { changeText } = textSlice.actions;

export const textSelector = (state: RootState) => state.text.text;
export const statusSelector = (state: RootState) => state.text.status;

export default textSlice.reducer;
