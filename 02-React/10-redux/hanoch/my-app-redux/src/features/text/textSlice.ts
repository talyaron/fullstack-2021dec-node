import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";


export interface TextState{
    text: string;
    status: "idle" | "loading" | "failed";
}

const initialState: TextState ={
    text: "",
    status: "idle",
}

export const TextSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        changeText: (state, action) =>{
            state.text = action.payload;
        }
    }
})