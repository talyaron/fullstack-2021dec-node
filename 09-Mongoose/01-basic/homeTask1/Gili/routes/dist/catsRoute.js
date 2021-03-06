"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var catsCont_1 = require("../controls/catsCont");
router
    .post('/add-cat', catsCont_1.addCat)
    .get('/get-all-cats', catsCont_1.getAllCats)
    .patch('/get-cats-age', catsCont_1.filterCatsByAge);
exports["default"] = router;
