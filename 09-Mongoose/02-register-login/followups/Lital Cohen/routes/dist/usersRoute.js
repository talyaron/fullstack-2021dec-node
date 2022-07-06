"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCtrl_1 = require("../conts/usersCtrl");
var router = express_1["default"].Router();
router.
    post('/login', usersCtrl_1.login)
    .post('/register', usersCtrl_1.register);
exports["default"] = router;
