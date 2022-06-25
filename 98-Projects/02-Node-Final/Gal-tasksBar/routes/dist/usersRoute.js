"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../cont/usersCont");
//
router
    .patch("/update-user", usersCont_1.updateUser)["delete"]("/user-delete", usersCont_1.handleDelete)
    .post("/add-user", usersCont_1.handleAddUser)
    .post("/register", usersCont_1.handleRegister)
    .post('/login', usersCont_1.handleLogin)
    .get('get-user', usersCont_1.getUserByCookie);
// .get('users-search', handleSearchItems)
// .get("/get-users", handleGetUsers)
exports["default"] = router;
