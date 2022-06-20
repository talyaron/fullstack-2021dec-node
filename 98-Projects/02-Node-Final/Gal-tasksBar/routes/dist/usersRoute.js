"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../cont/usersCont");
//
router
    .get("/get-users", usersCont_1.getUsers)
    // .patch("/update-user",updateUser )
    // .delete("/user-delete", handleDeleteUser )
    .post("/add-user", usersCont_1.handleAddUser);
//   .post('/get-user',getUser)
//   .post('/login', login)
// .get('get-user',getUserByCookie)
exports["default"] = router;
