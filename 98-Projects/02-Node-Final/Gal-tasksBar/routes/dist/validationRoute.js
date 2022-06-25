"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var validationCont_1 = require("../cont/validationCont");
// 
router
    .get("/login", validationCont_1.validateLoginForm)
    .post("/sign-up", validationCont_1.validateSignupForm);
exports["default"] = router;
