import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
  username: string;
  email: string;
  password: string;
  img: string;
}

const initialState: UserState = {
  username: '',
  email: '',
  password: '',
  img: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<{username:string, email:string, password:string, img:string}>) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.img = action.payload.img;
    }
  },
});

export const userSelector = (state: RootState) => state.user;
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
