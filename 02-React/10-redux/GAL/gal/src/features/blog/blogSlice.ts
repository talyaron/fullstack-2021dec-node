import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Card from '../view/Card';

export interface BlogState {
  text: string;
  src:string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BlogState = {
  text: '',
  src:'',
  status: 'idle',
};


export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    //action
    changeBlog:(state, action:PayloadAction<{src:string, text:string}>)=>{
        state.src = action.payload.src;
        state.text = action.payload.text;
    }
  }
});

export const { changeBlog  } = blogSlice.actions;

export const blogSelector = (state:RootState) => state.blog;



export default blogSlice.reducer;
