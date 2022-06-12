"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var recordsCont_1 = require("../controlers/recordsCont");
router
    .get("/albums-all", recordsCont_1.initStore)
    .post("/album-delete", recordsCont_1.deleteAlbum)
    .post("/album-add", recordsCont_1.addAlbum)
    .put("/album-update", recordsCont_1.updateAlbum)
    .get("/search", recordsCont_1.searchAlbum)
    .get("/select-type", recordsCont_1.selectTypeAlbum)
    .post("/album-clicked", recordsCont_1.handleDoubleClick);
exports["default"] = router;
