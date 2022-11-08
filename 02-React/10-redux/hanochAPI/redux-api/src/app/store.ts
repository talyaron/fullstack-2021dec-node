import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jokeSlice from '../features/joke/jokeSlice';


export const store = configureStore({
  reducer: {
    joke: jokeSlice
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
