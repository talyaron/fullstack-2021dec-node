"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var clientCont_1 = require("../controllers/clientCont");
router.get('/start', clientCont_1.setStart);
exports["default"] = router;
