"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var controlerPaint_1 = require("../controlers/controlerPaint");
router
    .get("/painting-get", controlerPaint_1.getPaintings)
    .post("/painting-add", controlerPaint_1.handleAddAPainting)
    .patch("/painting-update", controlerPaint_1.handleUpdateTitle)["delete"]("/painting-delete", controlerPaint_1.handleDelete)
    .get("/painting-by-technic", controlerPaint_1.handleSelectTechnic);
exports["default"] = router;
