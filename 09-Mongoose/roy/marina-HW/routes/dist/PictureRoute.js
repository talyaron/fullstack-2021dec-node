"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var ItemController_1 = require("../controllers/ItemController");
router
    .get("/get-picture", ItemController_1.getProduct);
exports["default"] = router;
