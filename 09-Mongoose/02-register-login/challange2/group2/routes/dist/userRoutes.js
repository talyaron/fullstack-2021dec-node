"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userControls_1 = require("../controllers/userControls");
var router = express_1["default"].Router();
router
    .post('/login', userControls_1.login)
    .post('/register', userControls_1.register)
    .post('/SaveInfo', userControls_1.saveInfo)
    .get('/get-user', userControls_1.getUser);
exports["default"] = router;
