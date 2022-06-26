import express from "express";
const router = express.Router();
import {
  validateLoginForm,
  validateSignupForm
} from "../cont/loginSignUpCont";

// 
router
  .get("/login", validateLoginForm)
  .post("/sign-up",validateSignupForm)


export default router;



