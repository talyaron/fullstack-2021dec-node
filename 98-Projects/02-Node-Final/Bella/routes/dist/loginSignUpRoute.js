"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var loginSignUpCont_1 = require("../cont/loginSignUpCont");
// 
router
    .post("/login", loginSignUpCont_1.handleLogin)
    .post("/register", loginSignUpCont_1.handleRegister);
exports["default"] = router;
