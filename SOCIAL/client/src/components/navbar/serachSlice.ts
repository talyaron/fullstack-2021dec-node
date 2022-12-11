import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";


export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
 
});

export const { changeSearch } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.search;
export default searchSlice.reducer;
