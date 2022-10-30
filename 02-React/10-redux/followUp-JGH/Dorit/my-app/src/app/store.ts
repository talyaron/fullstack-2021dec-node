import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import messageSlice from '../features/message/messageSlice';

export const store = configureStore({
  reducer: {

    message:messageSlice,

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
