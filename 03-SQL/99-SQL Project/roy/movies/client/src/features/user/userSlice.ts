import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { registerAsync } from "./userApi";

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}
export interface User {
  email: string;
  name: string;
}

export interface UserState {
  user: User | null;
  status: Status;
}

const initialState: UserState = {
  user: null,
  status: Status.IDLE,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(registerAsync.fulfilled, (state, action:PayloadAction<any>) => {
       state.status = Status.IDLE;
       const {user} = action.payload;
       state.user = user;
      })
      .addCase(registerAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
  
});

// export const { } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;


export default userSlice.reducer;
