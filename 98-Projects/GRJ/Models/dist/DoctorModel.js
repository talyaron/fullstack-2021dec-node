"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var DoctorSchema = new mongoose_1["default"].Schema({
    doctorId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
var DoctorModel = mongoose_1["default"].model('doctors', DoctorSchema);
exports["default"] = DoctorModel;
