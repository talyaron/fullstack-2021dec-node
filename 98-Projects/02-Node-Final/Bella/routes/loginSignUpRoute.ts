import express from "express";
const router = express.Router();
import {
  handleLogin,
  handleRegister
} from "../cont/loginSignUpCont";

// 
router
  .post("/login", handleLogin)
  .post("/register",handleRegister)


export default router;



