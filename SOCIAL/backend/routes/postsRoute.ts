import express from "express";
const router = express.Router();

import {
  getPosts,
  addPost,
  deletePost,
  getStories,
} from "../controllers/postsController";

router
  .get("/getPosts", getPosts)
  .get("/getStories", getStories)
  .post("/addPost", addPost)
  .delete("/deletePost/:id", deletePost);
export default router;