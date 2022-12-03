import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../app/store";
import { getAsync, searchAsync } from "../homeApi";


export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export interface Search {
 search:string
}

export interface searchState {
  search: Search | null;
  status: Status;
}

const initialState: searchState = {
  search: null,
  status: Status.IDLE,
};



export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(searchAsync.fulfilled, (state, action:PayloadAction<any>) => {
       state.status = Status.IDLE;
       const {search} = action.payload;
       state.search = search;
      })
      .addCase(searchAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});



// export const { } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.Search.search;
export const selectSearchStatus = (state: RootState) => state.Search.status;

export default searchSlice.reducer;
