"use strict";
exports.__esModule = true;
// import * as usersControler from "../controlers/usersControler";
var express_1 = require("express");
var router = express_1["default"].Router();
var userController_1 = require("../controllers/userController");
router
    .post("/register", userController_1.handleRegister)
    .post("/login", userController_1.handleLogin)
    .get("/get-user", userController_1.toNextPage)
    .post("/submit", userController_1.handleSubmit);
exports["default"] = router;
