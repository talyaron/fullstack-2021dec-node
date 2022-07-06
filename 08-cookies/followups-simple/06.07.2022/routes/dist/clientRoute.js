"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var clientController_1 = require("../controllers/clientController");
router.get("/hello", clientController_1.setHello);
exports["default"] = router;
