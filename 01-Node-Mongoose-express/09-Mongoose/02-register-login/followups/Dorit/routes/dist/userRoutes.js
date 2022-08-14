"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("../controller/userCont");
var router = express_1["default"].Router();
router
    .post('/user-register', userCont_1.register)
    .post('/user-login', userCont_1.login);
exports["default"] = router;
