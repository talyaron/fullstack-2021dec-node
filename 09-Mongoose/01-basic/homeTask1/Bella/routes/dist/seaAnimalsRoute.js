"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var seaAnimalsCont_1 = require("../controls/seaAnimalsCont");
router
    .post('/add-seaAnimal', seaAnimalsCont_1.addSeaAnimal);
exports["default"] = router;
