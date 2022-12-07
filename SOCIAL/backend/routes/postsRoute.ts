import express from "express";
const router = express.Router();

import {
  getPosts,
  addPost,
  deletePost,
  getStories,
} from "../controllers/postsController";

router
  .get("/", getPosts)
  .get("/", getStories)
  .post("/", addPost)
  .delete("/:id", deletePost)
export default router;