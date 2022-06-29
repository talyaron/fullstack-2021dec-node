import express from "express";
const router = express.Router();

import {
  getDeck,
  handleRegester,
  handleLogin,
  checkMatch,
  updateFlips,
  updateTime,
  handleSelectPlayer,
  showBestTime,
} from "../controlers/gameControler";

router
  .post("/get-deck", getDeck)
  .post("/player-add", handleRegester)
  .get("/check-if-exist", handleLogin)
  .get("/check-match", checkMatch)
  .put("/player-flips-update", updateFlips)
  .put("/player-time-update", updateTime)
  .post("/get-player-by-id", handleSelectPlayer)
  .post("/best-time", showBestTime)
export default router;