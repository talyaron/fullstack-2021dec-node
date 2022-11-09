import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { getJoke } from "./jokeAPI";

export interface JokeState{
    joke: string,
    status: "idle" | "loading" | "failed";
};

const initialState: JokeState ={
    joke: "",
    status: 'idle'
};

export const JokeSlice = createSlice({
    name: 'joke',
    initialState,
    reducers: {
        changeJoke: (state, action) =>{
            state.joke = action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getJoke.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getJoke.fulfilled, (state, action: PayloadAction<string>) => {
            state.status = 'idle';
            state.joke = action.payload;
        })
        .addCase(getJoke.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export const { changeJoke } = JokeSlice.actions;
export const jokeSelector = (state: RootState) => state.joke.joke;
export const statusJokeSelector = (state: RootState) => state.joke.status;

export default JokeSlice.reducer;