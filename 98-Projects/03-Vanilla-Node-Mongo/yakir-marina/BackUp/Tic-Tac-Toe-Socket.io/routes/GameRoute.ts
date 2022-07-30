import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
import { isUser } from "../middleware/helpers";

import { 
    getGames, 
    addGame,
} from "../controllers/GameController";


router
.get("/get-game", getGames)
.post("/add", addGame)
export default router;
