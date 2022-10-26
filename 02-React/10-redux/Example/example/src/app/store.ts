import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import blogSlice from '../features/blog/blogSlice';
import counterReducer from '../features/counter/counterSlice';
import textSlice from '../features/text/textSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text:textSlice,
    blog:blogSlice
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
