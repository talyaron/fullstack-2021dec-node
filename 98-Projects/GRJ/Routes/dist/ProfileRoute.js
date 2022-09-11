"use strict";
exports.__esModule = true;
var express_1 = require("express");
var ProfileCont_1 = require("../Conts/ProfileCont");
var router = express_1["default"].Router();
router
    .post('/get-name', ProfileCont_1.onscondPageLoad);
exports["default"] = router;
