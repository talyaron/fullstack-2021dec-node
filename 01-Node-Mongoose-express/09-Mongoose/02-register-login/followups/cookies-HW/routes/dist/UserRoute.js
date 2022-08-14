"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var UserController_1 = require("../controllers/UserController");
router
    .post("/register", UserController_1.handleRegister)
    .post("/login", UserController_1.handleLogin)
    // .get("/user", toNextPage)
    .get("/user-by-cookie", UserController_1.getUserByCookie);
exports["default"] = router;
