import express from "express";
const router = express.Router();

import {
  register,
  login,
  logout,
  getUserByCookie,
} from "../controllers/authController";

router
  .post("/register", register)
  .post("/login", login)
  .post("/logout", logout)
  .get("/user-by-cookie", getUserByCookie);
export default router;