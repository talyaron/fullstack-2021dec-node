import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface TextState {
  text: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TextState = {
  text: '',
  status: 'idle',
};


export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    //action
    changeText:(state, action)=>{
        state.text = action.payload;
    }
  }
});

export const { changeText  } = textSlice.actions;

export const textSelector = (state:RootState) => state.text.text

export default textSlice.reducer;
