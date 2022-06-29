"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("../controllers/userCont");
var router = express_1["default"].Router();
router
    .post('/push-User', userCont_1.pushUser);
exports["default"] = router;
