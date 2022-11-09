import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getJoke = createAsyncThunk(
    'getJoke',
    async (_, thunkAPI ) =>{
        const {data} = await axios.get('https://api.chucknorris.io/jokes/random')

        if (data.value){
            return data.value
        } else{
            return thunkAPI.rejectWithValue({error: data.error, message: data.message})
        }
    }
)