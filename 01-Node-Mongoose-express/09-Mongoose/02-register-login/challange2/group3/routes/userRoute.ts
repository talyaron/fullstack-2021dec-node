import express from "express";
const router = express.Router();

import {handleRegister, handleLogin, profileEdit} from "../cont/userCont";

router
    .post("/register", handleRegister)
    .post("/login", handleLogin)
    .post('/edit-profile', profileEdit)

export default router;