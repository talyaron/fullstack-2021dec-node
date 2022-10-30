import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
// interface
export interface textState {
    text: string;
    status: 'idle'
}
// defindind State:
const initialState: textState = {
    text: '',
    status: 'idle',
}
// definding initialState:
export const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        }
    },
})

export const { changeText } = textSlice.actions;
export const textSelector = (state: RootState) => state.text.text
export default textSlice.reducer