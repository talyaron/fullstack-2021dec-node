"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
var cookieParser = require("cookie-parser");
const app = express_1.default();
app.use(cookieParser());
const port = process.env.PORT || 3000;
require("dotenv").config();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const mongodb_uri = process.env.MONGODB_URI;
if (mongodb_uri) {
    mongoose_1.default
        .connect(mongodb_uri)
        .then((res) => {
        console.log("Connected to DB");
    })
        .catch((err) => {
        console.log("At mongoose.connect:");
        console.error(err.message);
    });
}
else {
    console.log('No mongodb uri');
}
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
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
