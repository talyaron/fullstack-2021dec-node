"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controller_1 = require("../controllers/controller");
var router = express_1["default"].Router();
router.post('/login', controller_1.login)
    .post('/register', controller_1.register);
exports["default"] = router;
