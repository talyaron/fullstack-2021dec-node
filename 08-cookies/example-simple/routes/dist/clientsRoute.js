"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var clientsCont_1 = require("../controlers/clientsCont");
router.get('/hello', clientsCont_1.setHello);
exports["default"] = router;
