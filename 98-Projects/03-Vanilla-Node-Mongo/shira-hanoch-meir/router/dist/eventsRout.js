"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var eventsCont_1 = require("../controller/eventsCont");
router.post('/add-events', eventsCont_1.addEvents)
    .get('/get-events', eventsCont_1.eventList)
    .post('/add-to-cart', eventsCont_1.addToCart)
    .get('/find-cart-by-user', eventsCont_1.cartByUser)
    .post('/delete-for-coach', eventsCont_1.deleteForCoach);
exports["default"] = router;
