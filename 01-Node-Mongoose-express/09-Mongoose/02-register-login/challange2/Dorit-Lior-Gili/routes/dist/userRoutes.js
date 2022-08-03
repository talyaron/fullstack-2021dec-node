"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCtrl_1 = require("../controller/userCtrl");
var router = express_1["default"].Router();
router
    // .get(`/get-user`, getUser)
    .post('/user-register', userCtrl_1.register)
    .post('/user-login', userCtrl_1.login)
    .post('/get-user', userCtrl_1.getUser)
    .patch('/edit-user', userCtrl_1.editUser);
exports["default"] = router;
