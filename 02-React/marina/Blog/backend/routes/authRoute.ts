import express from "express";
const router = express.Router();
import { login, logout, register } from "../controllers/authController";

router
    .post("/register", register)
    .post("/login", login)
    .post("/logout", logout)
export default router;
