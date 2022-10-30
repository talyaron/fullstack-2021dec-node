import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface BlogState {
  text: string;
  src:string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BlogState = {
  text: '',
  src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuy_mihqio-pc-uz6_hR4z06kmraDO1e0obFcK3d0Z&s',
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