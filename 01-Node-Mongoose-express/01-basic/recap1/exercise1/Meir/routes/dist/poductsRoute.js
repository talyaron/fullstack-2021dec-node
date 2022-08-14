"use strict";
exports.__esModule = true;
var express_1 = require("express");
var products_1 = require("../control/products");
var router = express_1["default"].Router();
router.get('/get-produtcs', products_1.getProducts);
exports["default"] = router;
