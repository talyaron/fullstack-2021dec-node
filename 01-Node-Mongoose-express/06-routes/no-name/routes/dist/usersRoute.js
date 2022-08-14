"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../cont/usersCont");
router
    .get("/user-get", usersCont_1.initUsers)
    .post("/user-delete", usersCont_1.handleDeleteUser)
    .post("/user-add", usersCont_1.handleAddUser);
exports["default"] = router;
