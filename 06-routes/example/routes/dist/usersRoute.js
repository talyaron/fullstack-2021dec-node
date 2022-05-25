"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../controlers/usersCont");
router
    .get('/get-users', usersCont_1.getAllUsers)
    .post("/add-user", usersCont_1.addUser)
    .patch("/update-user", usersCont_1.updateUser)["delete"]("/delete-user", usersCont_1.deleteUser);
exports["default"] = router;
