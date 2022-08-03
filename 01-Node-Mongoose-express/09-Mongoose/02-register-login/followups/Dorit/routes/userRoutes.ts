import express from "express";
import { register, login } from "../controller/userCont";
const router = express.Router();
router
.post('/user-register',register)
.post('/user-login',login)

export default router
