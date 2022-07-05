"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var UserControler = require("../controllers/UserController");
router
    .post("/register", UserControler.handleRegister)
    .post("/login", UserControler.handleLogin)
    .get("/get-user", UserControler.toNextPage)
    .post("/submit", UserControler.handleSubmit)
    .patch("/update", UserControler.handleUpdate);
exports["default"] = router;
