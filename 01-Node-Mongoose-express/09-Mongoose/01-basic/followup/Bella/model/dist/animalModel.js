"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
//schema (interface)
var animalSchema = new mongoose_1["default"].Schema({
    name: String,
    donation: String,
    color: String
});
//Model = collection
var seaAnimalModel = mongoose_1["default"].model("seaAnimals", animalSchema);
exports["default"] = seaAnimalModel;
