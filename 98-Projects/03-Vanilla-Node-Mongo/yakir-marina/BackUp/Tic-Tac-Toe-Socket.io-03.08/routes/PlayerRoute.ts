import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
import {getUserData} from '../middleware/getUserData';

import {
  register,
  login,
  getPlayerByCookie,
  updateLostByID,
  updateScoreByID,
  // updateStatsByID,
} from "../controllers/PlayerController";

router
  .post("/register", register)
  .post("/login", login)
  .get("/player-by-cookie", getUserData, getPlayerByCookie)
  .patch("/update-score", updateScoreByID)
  .patch("/update-lost", updateLostByID)
  // .patch("/update-stats", updateStatsByID)
export default router;
