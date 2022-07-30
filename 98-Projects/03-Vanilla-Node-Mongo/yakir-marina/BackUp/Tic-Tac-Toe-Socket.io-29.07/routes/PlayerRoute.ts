import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
// import {isUser} from '../middleware/helpers';

// isUser check to authrized user for login
export function getUserData(req, res, next) {
  try {
    const { player } = req.cookies;
    if (!player) throw new Error("user cookie not found");

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(player, secret);

    console.log("decodedCookie is:", decodedCookie);
    req.player = decodedCookie;
    console.log("req.player is:", req.player);
    next();
  } catch (error) {
    res.send({ error: error });
  }
}

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
  .patch("/update-score", getUserData, updateScore)
  .patch("/update-lost", getUserData, updateLost)
export default router;
