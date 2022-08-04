"use strict";
exports.__esModule = true;
var express_1 = require("express");
var meetingsCont_1 = require("../Conts/meetingsCont");
var router = express_1["default"].Router()
    .post('/get-meetings', meetingsCont_1.getUserMeeting)["delete"]('/delete-meetings', meetingsCont_1.handleDelete)
    .post('/Doc-meetings', meetingsCont_1.getDoctorMeeting);
router;
exports["default"] = router;
