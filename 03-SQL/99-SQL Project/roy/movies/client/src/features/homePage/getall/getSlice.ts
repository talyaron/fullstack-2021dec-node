import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../../app/store";
import { getAsync } from "../homeApi";

export enum Status {
    IDLE = "idle",
    LOADING = "loading",
    FAILED = "failed",
  }

export interface get {
    get:string
   }

export interface getState {
     get: get | null;
     status: Status;
   }

   const initialState: getState = {
    get: null,
    status: Status.IDLE,
   }

   export const getSlice = createSlice({
    name: "get",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAsync.pending, (state) => {
          state.status = Status.LOADING;
        })
        .addCase(getAsync.fulfilled, (state, action:PayloadAction<any>) => {
         state.status = Status.IDLE;
         const {get} = action.payload;
         state.get = get;
        })
        .addCase(getAsync.rejected, (state) => {
          state.status = Status.FAILED;
        });
    },
  });



export const selectGet = (state: RootState) => state.get.get;
export const selectGetStatus = (state: RootState) => state.get.status;

export default getSlice.reducer