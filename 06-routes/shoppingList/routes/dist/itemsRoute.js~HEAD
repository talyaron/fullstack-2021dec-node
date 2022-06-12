"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var itemsCont_1 = require("../cont/itemsCont");
router
    .patch("/updateItem", itemsCont_1.HandleUpdateItem)
    .get("/getAllItems", itemsCont_1.getAllItems)
    .post("/searchItems", itemsCont_1.filterItems);
exports["default"] = router;
