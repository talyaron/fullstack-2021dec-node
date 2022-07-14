"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCtrl_1 = require("../ctrls/userCtrl");
var router = express_1["default"].Router();
router
    .post("/register", userCtrl_1.register)
    .post("/login", userCtrl_1.login);
exports["default"] = router;
