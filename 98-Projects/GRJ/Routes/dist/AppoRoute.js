"use strict";
exports.__esModule = true;
var express_1 = require("express");
var AppoCont_1 = require("../Conts/AppoCont");
var router = express_1["default"].Router();
router
    .get('/getAppo', AppoCont_1.getAppo);
exports["default"] = router;
