"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var PictureController_1 = require("../controllers/PictureController");
router
    .get("/get-product", PictureController_1.getProduct);
exports["default"] = router;
