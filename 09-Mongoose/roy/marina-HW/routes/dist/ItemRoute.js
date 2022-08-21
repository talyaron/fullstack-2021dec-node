"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var ItemController_1 = require("../controllers/ItemController");
router
    .get("/get-item", ItemController_1.getProduct)
    .post("/add", ItemController_1.addItem)
    .get("/range-by-year", ItemController_1.yearRange);
// .post("/update-one", updateItem)
exports["default"] = router;
