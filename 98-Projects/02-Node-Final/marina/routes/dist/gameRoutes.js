"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var gameControler_1 = require("../controlers/gameControler");
router
    .post("/get-deck", gameControler_1.getDeck)
    .post("/player-add", gameControler_1.handleRegester)
    .get("/check-if-exist", gameControler_1.handleLogin)
    .get("/check-match", gameControler_1.checkMatch)
    .put("/player-flips-update", gameControler_1.updateFlips)
    .put("/player-time-update", gameControler_1.updateTime)
    .post("/get-player-by-id", gameControler_1.handleSelectPlayer)
    .post("/best-time", gameControler_1.showBestTime);
exports["default"] = router;
