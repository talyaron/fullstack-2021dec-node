"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var recipeCont_1 = require("../Controller/recipeCont");
router
    .get("getRoutRecipe", recipeCont_1.getRecipe);
exports["default"] = router;
