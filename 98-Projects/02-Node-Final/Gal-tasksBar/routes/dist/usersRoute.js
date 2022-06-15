"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../cont/usersCont");
//
router
    .get("/get-users", usersCont_1.getAllUsers)
    .patch("/update-user", usersCont_1.updateUser)["delete"]("/user-delete", usersCont_1.handleDeleteUser)
    .post("/user-add", usersCont_1.handleAddUser)
    .post('/get-user', usersCont_1.getUser);
exports["default"] = router;
