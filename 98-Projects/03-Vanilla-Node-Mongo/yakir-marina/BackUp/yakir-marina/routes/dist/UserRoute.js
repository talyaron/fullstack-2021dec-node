"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var UserController_1 = require("../controllers/UserController");
router
    .post("/register", UserController_1.register)
    .post("/login", UserController_1.login);
// getPlayerByCookie()
exports["default"] = router;
