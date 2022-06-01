"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var squreCont_1 = require("../controlers/squreCont");
router
    .get("/get-table-status", squreCont_1.getTableStatus)
    .patch("/reset-game", squreCont_1.resetGame)
    .post("/next-turn", squreCont_1.nextTurn);
exports["default"] = router;
