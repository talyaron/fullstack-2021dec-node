"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`Connected!`);
//@ts-ignore
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
server.listen(3000, () => {
    console.log('listening on *:3000');
});
app.use(express.json());
app.use(express.static('public'));
const squareRoutes_1 = __importDefault(require("./routes/squareRoutes"));
app.use("/squres", squareRoutes_1.default);
// console.log(window.location.search.substr(1))
