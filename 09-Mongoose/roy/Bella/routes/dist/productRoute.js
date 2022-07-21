"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productCtrl_1 = require("../ctrls/productCtrl");
var router = express_1["default"].Router();
router
    .post("/add-product", productCtrl_1.addProduct);
exports["default"] = router;
