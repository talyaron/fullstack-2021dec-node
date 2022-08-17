"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var catsCont_1 = require("../controls/catsCont");
router
    .get('/get-kittens', catsCont_1.getkittens)
    .post('/search-kitten', catsCont_1.searchKitten);
exports["default"] = router;
