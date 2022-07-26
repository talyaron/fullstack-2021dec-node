"use strict";
exports.__esModule = true;
var express_1 = require("express");
var route = express_1["default"].Router();
var usersCont_1 = require("../controller/usersCont");
route
    .post('/register', usersCont_1.register)
    .post('/login', usersCont_1.login)
    .post('/coachLogin', usersCont_1.coachLogin);
exports["default"] = route;
