"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../controlers/usersCont");
router
    .get('/get-users', usersCont_1.getAllUsers);
exports["default"] = router;
