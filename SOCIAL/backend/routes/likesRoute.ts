import express from "express";
const router = express.Router();

import {
  getLikes,
  addLike,
  deleteLike,
} from "../controllers/likesController";

router
  .get("/getLikes", getLikes)
  .post("/addLike", addLike)
  .delete("/deleteLike", deleteLike);
export default router;