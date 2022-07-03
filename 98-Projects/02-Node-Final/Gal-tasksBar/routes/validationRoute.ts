import express from "express";
const router = express.Router();

import {
  handleLogin,
  handleRegister,
  getUser
} from "../cont/validationCont";

// 
router
  .post("/login", handleLogin)
  .post("/register",handleRegister)
  .get('/get-user', getUser)

export default router;
