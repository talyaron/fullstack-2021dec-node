
import express from "express";
const router = express.Router();
import {
  handleRegister,
  handleLogin,
  // toNextPage,
  getUserByCookie,
} from "../controllers/UserController";

router
  .post("/register", handleRegister)
  .post("/login", handleLogin)
  // .get("/user", toNextPage)
  .get("/user-by-cookie", getUserByCookie)
export default router;


