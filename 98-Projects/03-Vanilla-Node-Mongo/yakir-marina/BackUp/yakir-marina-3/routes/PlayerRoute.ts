import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
import {isUser} from '../middleware/helpers';

import {
  register,
  login,
  getPlayerByCookie,
} from "../controllers/UserController";


router
  .post("/register", register)
  .post("/login", login)
  .get("/player-by-cookie", getPlayerByCookie);
export default router;

// router
//   .post("/register", isUser, register)
//   .post("/login", isUser, login)
//   .get("/player-by-cookie", isUser, getPlayerByCookie);
// export default router;
