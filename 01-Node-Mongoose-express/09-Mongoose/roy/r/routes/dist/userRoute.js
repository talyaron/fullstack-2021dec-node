"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("../controls/userCont");
var router = express_1["default"].Router();
router.post('/register', userCont_1.register)
    .post('/login', userCont_1.login);
exports["default"] = router;
