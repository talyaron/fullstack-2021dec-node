"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PaintingSchema = new mongoose_1.default.Schema({
    artist: String,
    title: String,
    technic: String,
    year: Number,
    url: String,
});
module.exports = mongoose_1.default.model("Paintings", PaintingSchema);
