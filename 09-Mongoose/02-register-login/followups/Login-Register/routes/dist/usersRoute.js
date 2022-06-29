"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControler_1 = require("../controlers/usersControler");
router
    .post("/register", usersControler_1.handleRegister)
    .post('/login', usersControler_1.handleLogin)
    .get('/get-user', usersControler_1.getUser);
exports["default"] = router;
