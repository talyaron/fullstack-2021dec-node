import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import guideSlice from '../features/guides/guideSlice';


export const store = configureStore({
  reducer: {
    guides: guideSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<AnyAction>
>;
