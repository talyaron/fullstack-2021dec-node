"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var catsCont_1 = require("../controls/catsCont");
router
    .get('/get-all-cats', catsCont_1.getAllCats)
    .get('/filter-cats-by-age', catsCont_1.filterCatsByAge)
    .post('/add-cat', catsCont_1.addCat);
exports["default"] = router;
