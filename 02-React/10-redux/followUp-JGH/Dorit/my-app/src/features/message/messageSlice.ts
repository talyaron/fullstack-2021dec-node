import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface MessageState {
  text: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MessageState = {
  text: '',
  status: 'idle',
};


export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    //action
    changeText:(state, action)=>{
        state.text = action.payload;
    }
  }
});

export const { changeText  } = messageSlice.actions;

export const messageSelector = (state:RootState) => state.message.text

export default messageSlice.reducer;