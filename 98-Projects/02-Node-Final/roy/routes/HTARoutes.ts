import express from "express";
const router = express.Router();
import {
  getAllTeams,
  handleDeleteTeam,
  getAllTransfers,
  getScore,
  getAllArticales
} from "../cont/HTAConts";

//
router
  .get("/get-teams", getAllTeams)
  .delete("/Team-delete", handleDeleteTeam)
  .get("/get-transfers", getAllTransfers)
  .get("/get-score", getScore)
  .get("/get-articles", getAllArticales)

export default router;
