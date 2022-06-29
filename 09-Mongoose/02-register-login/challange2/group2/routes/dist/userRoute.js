"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("../controllers/userCont");
var router = express_1["default"].Router();
router
    .post('/profile-edit', userCont_1.profileEdit);
exports["default"] = router;
