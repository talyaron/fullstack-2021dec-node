import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../features/homePage/searchByName/searchSlice';
import userReducer from '../features/user/userSlice';
import getReducer from '../features/homePage/getall/getSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    Search: searchReducer,
    get: getReducer,
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
