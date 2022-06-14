import express from "express";
const router = express.Router();
import {
  getAllTeams,
  
} from "../cont/indexCont";

//
router
  .get("/get-teams", getAllTeams)
  

export default router;
