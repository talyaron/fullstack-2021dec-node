import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface themeState {
  darkMode: boolean;
}

const initialState: themeState = {
  darkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      //@ts-ignore
      // localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const selectDarkMode = (state: RootState) => state.theme.darkMode;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
