"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var catsCont_1 = require("../controller/catsCont");
router.post('/catsList', catsCont_1.addCat)
    .get('/catsList', catsCont_1.getCats)
    .get('/searchCats', catsCont_1.searchCat);
exports["default"] = router;
