import express from "express";
const router = express.Router();

import {
  getPosts,
  addPost,
  deletePost,
} from "../controllers/postsController";

router
  .get('/', getPosts)
  .post('/', addPost)
  .delete('/:id', deletePost)
export default router;