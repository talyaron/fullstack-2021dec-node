"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productCont_1 = require("../controls/productCont");
var router = express_1["default"].Router();
router.get('/get-my-products', productCont_1.getMyProducts);
exports["default"] = router;
