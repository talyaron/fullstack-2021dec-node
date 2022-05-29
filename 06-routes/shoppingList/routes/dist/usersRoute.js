"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../cont/usersCont");
router
    .get("/get-users", usersCont_1.getAllUsers)
    .patch("/update-user", usersCont_1.updateUser);
exports["default"] = router;
