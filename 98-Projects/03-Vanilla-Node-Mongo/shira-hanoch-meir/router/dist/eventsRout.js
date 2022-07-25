"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var eventsCont_1 = require("../controller/eventsCont");
router.post('/add-events', eventsCont_1.addEvents)
    .get('get-events', eventsCont_1.eventList);
exports["default"] = router;
