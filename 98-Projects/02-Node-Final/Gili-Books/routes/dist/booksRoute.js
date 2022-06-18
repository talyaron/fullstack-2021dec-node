"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var booksCont_1 = require("../cont/booksCont");
//
router
    .get('/get-Books', booksCont_1.getUserBooks)["delete"]('/delete-book', booksCont_1.deleteBook)
    .post('/add-Book', booksCont_1.addBook)
    .patch('/mark-as-read', booksCont_1.markAsRead)
    .get('/get-a-book', booksCont_1.getABook)
    .patch('/mark-currently', booksCont_1.markCurrently)
    .patch('/add-Favorite', booksCont_1.addFavorite);
exports["default"] = router;
