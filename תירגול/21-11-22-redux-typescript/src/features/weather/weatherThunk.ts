import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (searchCity: string) => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=0f5e793d5d33c40006e95c9c82122380`)
        return data
    }
)