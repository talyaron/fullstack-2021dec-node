"use strict";
exports.__esModule = true;
// import { Router } from 'express';
var express_1 = require("express");
var productsCont_1 = require("../controllers/productsCont");
// const router = Router()
var router = express_1["default"].Router();
router.get('/get-all-products', productsCont_1.getAllProducts)
    .get('/:id', productsCont_1.getOneItem);
exports["default"] = router;
