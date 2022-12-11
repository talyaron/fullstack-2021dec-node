import express from "express";
const router = express.Router();

import {
  getComments,
  addComments,
  getCommentsAmount,
} from "../controllers/commentsController";

router
  .get("/getComments", getComments)
  .post("/addComments", addComments)
  .get("/getCommentsAmount", getCommentsAmount);
export default router;