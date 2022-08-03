"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productCtrl_1 = require("../ctrls/productCtrl");
var middleware_1 = require("../middlewares/middleware");
var router = express_1["default"].Router();
router
    .get("/get-products", productCtrl_1.getProducts, middleware_1.isAdmin)
    .post("/add-product", productCtrl_1.addProduct);
exports["default"] = router;
