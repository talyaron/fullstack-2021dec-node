"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var userCont_1 = require("../cont/userCont");
router
    .post("/register", userCont_1.handleRegister)
    .post("/login", userCont_1.handleLogin)
    .post('/edit-profile', userCont_1.profileEdit);
exports["default"] = router;
