import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
// import bcrypt from "bcrypt";


import { 
    getGames, 
    createGame,
} from "../controllers/GameController";


router
.get("/get-game", getGames)
.post("/add", createGame)
export default router;
