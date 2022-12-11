import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { registerAsync } from "./userAPI";
import User from "../models/userInterface";


export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export interface UserState {
  user: User;
  currentUser: boolean;
  status: Status;
}

const initialState: UserState = {
  user: {
    id: null,
    username: "",
    email: "",
    password: "",
    name: "",
    profilePic: "",
    coverPic: "",
    city: "",
    website: "",
  },
  currentUser: false,
  status: Status.IDLE,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    enabbleUser(state) {
      state.currentUser = true;
    },
    disabbleUser(state) {
      state.currentUser = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(registerAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = Status.IDLE;
        const { user } = action.payload;
        state.user = user;
      })
      .addCase(registerAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export const { updateUser, enabbleUser, disabbleUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;
export default userSlice.reducer;
