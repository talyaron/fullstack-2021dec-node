import express from "express";
const router = express.Router();
import jwt from "jwt-simple";

import {
  register,
  login,
  // getPlayerByCookie()
} from "../controllers/UserController";

router
  .post("/register", register)
  .post("/login", login)
  // getPlayerByCookie()
export default router;
