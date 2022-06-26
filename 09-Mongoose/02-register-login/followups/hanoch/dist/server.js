"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
mongoose_1.default.connect('mongodb+srv://hanoch:phxoD1XwGzr4NqIq@cluster0.37kenwy.mongodb.net/userDB?retryWrites=true&w=majority')
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
