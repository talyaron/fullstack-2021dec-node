"use strict";
exports.__esModule = true;
var express_1 = require("express");
var meetingsCont_1 = require("../Conts/meetingsCont");
var router = express_1["default"].Router()
    .post('/get-meetings', meetingsCont_1.getUserMeting);
router;
exports["default"] = router;
