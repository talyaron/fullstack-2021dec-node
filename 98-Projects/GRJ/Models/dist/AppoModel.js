"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var AppoSchema = new mongoose_1["default"].Schema({
    userId: {
        type: String
    },
    doctorId: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    kind: {
        type: String
    }
});
var AppoModel = mongoose_1["default"].model('appos', AppoSchema);
exports["default"] = AppoModel;
