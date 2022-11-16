import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface NavbarState {
  isShowingNavbar: boolean;
}

const initialState: NavbarState = {
  isShowingNavbar: true,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    show(state) {
      state.isShowingNavbar = true;
    },
    hide(state) {
      state.isShowingNavbar = false;
    },
  },
});

export const isShowingNavbarSelector = (state: RootState) => state.navbar.isShowingNavbar;
export const { show, hide } = navbarSlice.actions;
export default navbarSlice.reducer;
