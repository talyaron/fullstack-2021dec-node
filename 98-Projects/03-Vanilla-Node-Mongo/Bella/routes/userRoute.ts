import express from "express";
const router = express.Router();
import {
    register,
    login
} from "../ctrls/userCtrl";

// 
router
    .post("/register", register)
    .post("/login", login)


export default router;
