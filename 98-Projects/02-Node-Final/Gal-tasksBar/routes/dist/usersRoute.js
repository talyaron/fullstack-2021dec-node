"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var mainTs = require('../models/models');
var passport = require('passport');
var usersCont_1 = require("../cont/usersCont");
//
router
    .get("/get-users", usersCont_1.getUsers)["delete"]("/user-delete", usersCont_1.handleDelete)
    .post("/add-user", usersCont_1.handleAddUser)
    //   .post('/get-user',getUser)
    .post('/login', usersCont_1.handleLogin)
    .get('/login', passport.Authenticate('local'))
    .get('get-user', usersCont_1.getUserByCookie);
// .get('get-user', handleSearchItems)
exports["default"] = router;
