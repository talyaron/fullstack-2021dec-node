"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productsCtrl_1 = require("../control/productsCtrl");
var router = express_1["default"].Router();
router.get("/get-products", productsCtrl_1.getProducts)
    .post("/add-product", productsCtrl_1.addProduct)["delete"]("/delete-products", productsCtrl_1.deleteProduct)
    .patch("/update-Product", productsCtrl_1.updateProduct);
exports["default"] = router;
