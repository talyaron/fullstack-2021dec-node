import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getJoke = createAsyncThunk(
    'api/jokes/get-joke',
    async (_, thunkApi) => {
       console.dir(thunkApi)
        const { data } = await axios.get(`https://api.chucknorris.io/jokes/random`);
    
        // The value we return becomes the `fulfilled` action payload
        if (data.value) {
            return data.value;
        } else {
            return thunkApi.rejectWithValue({ error: data.error, message: data.message });
        }

    }
);