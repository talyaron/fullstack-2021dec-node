"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var clientCont_1 = require("../controlers/clientCont");
router.get('/clientName', clientCont_1.clientName);
exports["default"] = router;
