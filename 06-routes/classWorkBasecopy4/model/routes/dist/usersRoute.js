"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../controlers/usersCont");
post("/add-user", usersCont_1.addUser);
exports["default"] = router;
