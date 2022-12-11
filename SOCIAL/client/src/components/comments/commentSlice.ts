import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import CommentInterface from "../../models/commentInterface";

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export interface CommentsState {
  commentOpen: boolean;
  comments: CommentInterface[];
  comment: CommentInterface;
  status: Status;
}

const initialState: CommentsState = {
  commentOpen: false,
  comment: {
    id: null,
    userId: null,
    postId: null,
    name: "",
    description: "",
    profilePic: "",
  },
  comments: [
    {
      id: null,
      userId: null,
      postId: null,
      name: "",
      description: "",
      profilePic: "",
    },
  ],
  status: Status.IDLE,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    toggleComment: (state) => {
      state.commentOpen = !state.commentOpen;
      //   state.commentOpen = action.payload;
    },
    updateComments: (state, action) => {
      state.comments = action.payload;
    },
    updateComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const commentOpenSelector = (state: RootState) => state.comments.commentOpen;
export const commentsSelector = (state: RootState) => state.comments.comments;
export const commentSelector = (state: RootState) => state.comments.comment;
export const { toggleComment, updateComment, updateComments } = commentsSlice.actions;
export default commentsSlice.reducer;
