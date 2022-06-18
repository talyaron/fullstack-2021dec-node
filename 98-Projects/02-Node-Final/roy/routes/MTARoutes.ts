import express from "express";
const router = express.Router();
import {
  getAllTeams,
  handleDeleteTeam,
  getAllTransfers,
  getScore,
  getAllArticales,
  updateTransfer,
  updateScore,
  updateArticle
} from "../cont/MTACont";

//
router
  .get("/get-teams", getAllTeams)
  .delete("/Team-delete", handleDeleteTeam)
  .get("/get-transfers", getAllTransfers)
  .get("/get-score", getScore)
  .get("/get-Articles", getAllArticales)
  .patch("/update-Transfers", updateTransfer)
  .patch("/update-Score", updateScore)
  .patch("/update-Articles", updateArticle)
export default router;
