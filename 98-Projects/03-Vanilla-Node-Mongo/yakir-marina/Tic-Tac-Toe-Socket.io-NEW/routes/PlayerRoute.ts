import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
import {getUserData} from '../middleware/getUserData';

import {
  register,
  login,
  getPlayerByCookie,
  updateLost,
  updateScore,
} from "../controllers/PlayerController";

router
  .post("/register", register)
  .post("/login", login)
  .get("/player-by-cookie", getUserData, getPlayerByCookie)
  .patch("/update-score", updateScore)
  .patch("/update-lost", updateLost)
  .get("/score-board")
export default router;
