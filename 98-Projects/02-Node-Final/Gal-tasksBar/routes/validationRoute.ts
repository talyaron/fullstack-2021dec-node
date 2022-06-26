import express from "express";
const router = express.Router();
import {
  handleLogin,
  handleRegister
} from "../cont/validationCont";

// 
router
  .get("/login", handleLogin)
  .post("/register",handleRegister)


export default router;
