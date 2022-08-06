"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var DoctorSchema = new mongoose_1["default"].Schema({
    doctorId: {
        type: Number,
        required: true
    },
    doctorType: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});
var DoctorModel = mongoose_1["default"].model('doctors', DoctorSchema);
exports["default"] = DoctorModel;
