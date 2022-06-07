"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var storyCont_1 = require("../controlers/storyCont");
router.post('/onGo_story', storyCont_1.postStory);
router.get('/onGo_story', getStory);
exports["default"] = router;
