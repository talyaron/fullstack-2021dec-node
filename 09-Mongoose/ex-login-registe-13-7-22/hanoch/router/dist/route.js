"use strict";
exports.__esModule = true;
var express_1 = require("express");
var route = express_1["default"].Router();
var usersCont_1 = require("../controller/usersCont");
var productsCont_1 = require("../controller/productsCont");
route.post('/register', usersCont_1.register)
    .post('/login', usersCont_1.login)
    .post('/products', productsCont_1.products)
    .get('/disProducts', productsCont_1.displayProduct);
exports["default"] = route;
