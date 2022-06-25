import express from "express";
const router = express.Router();
import {
  validateLoginForm,
  validateSignupForm
} from "../cont/validationCont";

// 
router
  .get("/login", validateLoginForm)
  .post("/sign-up",validateSignupForm)


export default router;
