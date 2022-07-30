"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
// import bcrypt from "bcrypt";
var GameController_1 = require("../controllers/GameController");
router
    .get("/get-game", GameController_1.getGames)
    .post("/add", GameController_1.createGame);
exports["default"] = router;
