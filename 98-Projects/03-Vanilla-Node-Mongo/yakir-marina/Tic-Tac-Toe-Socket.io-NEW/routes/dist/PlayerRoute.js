"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var getUserData_1 = require("../middleware/getUserData");
var PlayerController_1 = require("../controllers/PlayerController");
router
    .post("/register", PlayerController_1.register)
    .post("/login", PlayerController_1.login)
    .get("/player-by-cookie", getUserData_1.getUserData, PlayerController_1.getPlayerByCookie)
    .patch("/update-score", PlayerController_1.updateScore)
    .patch("/update-lost", PlayerController_1.updateLost);
exports["default"] = router;
