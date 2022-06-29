"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var validationCont_1 = require("../cont/validationCont");
// 
router
    .post("/login", validationCont_1.handleLogin)
    .post("/register", validationCont_1.handleRegister)
    .get('/get-user', validationCont_1.getUser);
exports["default"] = router;
