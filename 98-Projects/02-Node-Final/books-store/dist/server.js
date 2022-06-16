"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
//@ts-ignore
const port = process.env.PORT | 3000;
app.use(express.json());
app.use(express.static("public"));
const bookRoute_1 = __importDefault(require("./route/bookRoute"));
app.use('/', bookRoute_1.default);
app.listen(port, () => {
    console.log(`listen on port ${port}`);
});
