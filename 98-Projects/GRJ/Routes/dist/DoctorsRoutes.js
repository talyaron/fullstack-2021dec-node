"use strict";
exports.__esModule = true;
var express_1 = require("express");
var DoctorsCont_1 = require("../Conts/DoctorsCont");
var router = express_1["default"].Router();
router
    .get('/getAllDoctors', DoctorsCont_1.getAllDoctors);
exports["default"] = router;
