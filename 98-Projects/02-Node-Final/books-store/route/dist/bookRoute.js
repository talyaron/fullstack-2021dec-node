"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var bookCont_1 = require("../controlers/bookCont");
router.post('/booksStore', bookCont_1.postBook)
    .get('/booksStore', bookCont_1.getBook)
    .put('/updateDesc', bookCont_1.updateDescription)
    .put('/updatePrice', bookCont_1.updatePrice)["delete"]('/deleteBook', bookCont_1.deleteBook)
    .get('/clientGet', bookCont_1.getBook);
exports["default"] = router;
