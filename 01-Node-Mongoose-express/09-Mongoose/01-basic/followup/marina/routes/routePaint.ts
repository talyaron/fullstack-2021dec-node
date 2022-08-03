
import express from "express";
const router = express.Router();

import {
  getPaintings,
  handleAddAPainting,
  handleUpdateTitle,
  handleDelete,
  handleSelectTechnic,
} from "../controlers/controlerPaint";

router
  .get("/painting-get", getPaintings)
  .post("/painting-add", handleAddAPainting)
  .patch("/painting-update", handleUpdateTitle)
  .delete("/painting-delete", handleDelete)
  .get("/painting-by-technic", handleSelectTechnic)
export default router;