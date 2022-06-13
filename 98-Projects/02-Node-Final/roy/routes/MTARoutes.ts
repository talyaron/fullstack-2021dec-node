import express from "express";
const router = express.Router();
import {
  getAllTeams,
  handleDeleteTeam
} from "../cont/MTACont";

//
router
  .get("/get-teams", getAllTeams)
  .delete("/Team-delete", handleDeleteTeam)

export default router;
