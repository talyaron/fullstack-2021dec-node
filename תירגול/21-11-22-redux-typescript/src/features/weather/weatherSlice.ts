import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getWeather } from './weatherThunk';

interface WeatherState {
    value: any,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: WeatherState = {
    value: {},
    status: "idle"
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(getWeather.rejected, (state) => {
                state.status = 'failed';
            })

    }
})

export const selectWeather = (state: RootState) => state.weather.value
export default weatherSlice.reducer