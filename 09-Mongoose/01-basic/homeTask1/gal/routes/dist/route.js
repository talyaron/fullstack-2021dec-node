"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var cont_1 = require("../cont/cont");
router.post("/add-cat", cont_1.addCat);
router.get("/get-all-cats", cont_1.getAllCats);
exports["default"] = router;
