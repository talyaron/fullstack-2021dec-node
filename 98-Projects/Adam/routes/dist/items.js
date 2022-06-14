"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var items_1 = require("../controllers/items");
router.get('/', function (req, res) {
    console.log(req.query);
    res.json(items_1.getAllItems(req, res)); // convert items JSON to string and return to response
});
exports["default"] = router;
