"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../cont/usersCont");
//
router
    .patch("/update-user", usersCont_1.handleUpdateUser)["delete"]("/user-delete", usersCont_1.handleDelete)
    .post("/add-user", usersCont_1.handleAddUser)
    .post('/get-users', usersCont_1.getUsers)
    .get('/get-userCookie', usersCont_1.getUserByCookie);
exports["default"] = router;
