"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
io.on('connection', (socket) => {
    console.log('user connection');
    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log(`message:${msg}`);
        io.emit('chat message', msg);
    });
});
server.listen(3000, () => {
    console.log('listening on port 3000');
});
