import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "../themeRedux/themeSlice";
import userReducer from "../userRedux/userSlice";
import postsReducer from "../components/posts/postsSlice";
import commentsReducer from "../components/comments/commentSlice";
import searchReducer from '../components/navbar/serachSlice';


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
    search: searchReducer,
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
