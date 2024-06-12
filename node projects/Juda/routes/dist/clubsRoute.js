"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var clubsCont_1 = require("../cont/clubsCont");
router
    .post("/findClub", clubsCont_1.getSearchData);
exports["default"] = router;
