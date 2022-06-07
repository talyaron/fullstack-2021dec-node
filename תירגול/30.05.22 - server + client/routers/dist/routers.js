"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var controllers_1 = require("../controllers/controllers");
router.get('/', controllers_1.hendleGetData);
exports["default"] = router;
