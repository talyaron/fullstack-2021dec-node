"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var GameSchema = new mongoose_1["default"].Schema({
    gameId: {
        type: String,
        requierd: true
    },
    player1: {
        type: String,
        requierd: true
    },
    player2: {
        type: String,
        requierd: true
    },
    time: {
        type: String,
        requierd: true
    },
    winnerId: {
        type: String,
        requierd: true
    }
});
var GameModel = mongoose_1["default"].model("games", GameSchema);
exports["default"] = GameModel;
