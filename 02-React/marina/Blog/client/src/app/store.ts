import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import isAuthenticatedReducer from "../features/login/loginSlice";
import isShowingNavbarSelector from "../components/navbar/showNavbarSlice";
import userReducer from '../features/login/userSlice'

export const store = configureStore({
  reducer: {
    auth: isAuthenticatedReducer,
    navbar: isShowingNavbarSelector,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
