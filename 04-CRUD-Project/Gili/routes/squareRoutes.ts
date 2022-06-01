import express from "express";
const router = express.Router();
import {
    getTableStatus,
    resetGame,
    nextTurn
} from "../controlers/squreCont";

router
  .get("/get-table-status", getTableStatus)
  .patch("/reset-game", resetGame)
  .post("/next-turn", nextTurn)

export {router};
