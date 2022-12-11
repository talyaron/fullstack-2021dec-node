import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import PostInterface from "../../models/postInterface";
import {StoryInterface} from "../../models/postInterface";
// import { getPostsAsync } from './postsApi'

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export interface PostsState {
  posts: PostInterface[];
  stories: StoryInterface[];
  post: PostInterface;
  status: Status;
}

const initialState: PostsState = {
  post: {
    id: null,
    userId: null,
    name: "",
    img: "",
    profilePic: "",
    description: "",
  },
  posts: [
    {
      id: null,
      userId: null,
      name: "",
      img: "",
      profilePic: "",
      description: "",
    },
  ],
  stories: [
    {
      id: null,
      userId: null,
      // name: "",
      img: "",
    }
  ],
  status: Status.IDLE,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePosts: (state, action) => {
      state.posts = action.payload;
    },
    updatePost: (state, action) => {
      state.post = action.payload;
    },
    updateStories: (state, action) => {
      state.posts = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getPostsAsync.pending, (state) => {
  //       state.status = Status.LOADING;
  //     })
  //     .addCase(
  //       getPostsAsync.fulfilled,
  //       (state, action: PayloadAction<any>) => {
  //         state.status = Status.IDLE;
  //         const { posts } = action.payload;
  //         state.posts = posts;
  //       }
  //     )
  //     .addCase(getPostsAsync.rejected, (state) => {
  //       state.status = Status.FAILED;
  //     });
  // },
});

export const { updatePosts, updatePost, updateStories } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectStories = (state: RootState) => state.posts.stories;
export const selectPost = (state: RootState) => state.posts.post;
export default postsSlice.reducer;
