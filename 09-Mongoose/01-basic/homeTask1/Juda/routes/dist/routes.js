"use strict";
exports.__esModule = true;
var express_1 = require("express");
var catsCont_1 = require("../cont/catsCont");
var router = express_1["default"].Router();
router
    .post('/addCat', catsCont_1.addCat)
    .get('/getAllCats', catsCont_1.getAllCats)
    .patch('/findCats', catsCont_1.findCats)
    .patch('/findCatsExpert', catsCont_1.findCatsExpert);
exports["default"] = router;
