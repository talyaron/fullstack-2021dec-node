"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var clientCont_1 = require("../controller/clientCont");
router.post('/addUser', clientCont_1.handleGetUser)
    .get('/getCookie', clientCont_1.getCookie);
exports["default"] = router;
