"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("../control/usersCont");
var router = express_1["default"].Router();
router.post('/login', usersCont_1.login)
    .post('/register', usersCont_1.register);
exports["default"] = router;
