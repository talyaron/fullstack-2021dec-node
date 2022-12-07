import express from "express";
const router = express.Router();

import {
  getComments,
  addComments,
  getCommentsAmount,
} from "../controllers/commentsController";

router
  .get('/', getComments)
  .post('/', addComments)
  .get('/', getCommentsAmount)
export default router;