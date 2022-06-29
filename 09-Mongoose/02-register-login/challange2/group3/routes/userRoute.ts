import express from "express";
const router = express.Router();

import {handleRegister, handleLogin} from "../cont/userCont";

router
    .post("/register", handleRegister)
    .post("/login", handleLogin)

export default router;