"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productsCtrl_1 = require("../control/productsCtrl");
var router = express_1["default"].Router();
router.get('/get-produtcs', productsCtrl_1.getProducts)
    .post("/add-product, addProduct");
exports["default"] = router;
