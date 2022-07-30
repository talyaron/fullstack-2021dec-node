"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Connected!");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const mongoose_1 = __importDefault(require("mongoose"));
let cookieParser = require("cookie-parser");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
require("dotenv").config();
const url = process.env.MONGODB_URL;
const port = process.env.PORT || 4007;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
const PlayerRoute_1 = __importDefault(require("./routes/PlayerRoute"));
app.use("/players", PlayerRoute_1.default);
const GameRoute_1 = __importDefault(require("./routes/GameRoute"));
app.use("/games", GameRoute_1.default);
// import socketConnection, { join, opponent } from "./socket";
// import PlayerModel from "./models/PlayerModel";
let users = {};
let players = {};
let unmatched;
mongoose_1.default
    .connect(url)
    .then(() => {
    console.log("connected to DB");
})
    .catch((err) => {
    console.log("Failed to connect to DB:");
    console.log(err.message);
});
//======================================================================
io.on("connection", (socket) => {
    try {
        console.log("New user is connected ID:", socket.id);
        // console.log(socket);
        // GAME =========================================
        let id = socket.id;
        users[socket.id] = socket;
        join(socket); // Fill 'players' data structure
        if (opponent(socket)) {
            // If the current player has an opponent the game can begin
            socket.emit("game-begin", {
                // Send the game.begin event to the player
                symbol: players[socket.id].symbol,
            });
            opponent(socket).emit("game-begin", {
                // Send the game.begin event to the opponent
                symbol: players[opponent(socket).id].symbol,
            });
        }
        // Event for when any player makes a move
        socket.on("make-move", (data) => {
            if (!opponent(socket)) {
                // This shouldn't be possible since if a player doens't have an opponent the game board is disabled
                return;
            }
            // Validation of the moves can be done here
            socket.emit("move-made", data); // Emit for the player who made the move
            opponent(socket).emit("move-made", data); // Emit for the opponent
        });
        // called from the server to the client
        socket.on("join-game-room", (room, callback) => {
            socket.join(room);
            callback(`${room} joined`);
            console.log("Joined room is:", `${room}`);
        });
        socket.on("disconnect", () => {
            if (opponent(socket)) {
                opponent(socket).emit("opponent-left");
                console.log("The user is disconnected ID:", socket.id);
                socket.broadcast.emit("The user is disconnected", id);
                delete users[socket.id];
                // showTime();
            }
        });
        // CHAT ========================================
        socket.on("send-message", (message, room) => {
            if (room === "") {
                socket.broadcast.emit("recieve-message", message);
            }
            else {
                socket.to(room).emit("recieve-message", message);
            }
            console.log(message);
        });
        socket.on("join-room", (room, callback) => {
            socket.join(room);
            callback(`${room} joined`);
            console.log(room);
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
function join(socket) {
    try {
        players[socket.id] = {
            opponent: unmatched,
            symbol: "X",
            socket: socket,
        };
        if (unmatched) {
            players[socket.id].symbol = "O";
            players[unmatched].opponent = socket.id;
            unmatched = null;
        }
        else {
            unmatched = socket.id;
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
function opponent(socket) {
    try {
        if (!players[socket.id].opponent) {
            return;
        }
        return players[players[socket.id].opponent].socket;
    }
    catch (error) {
        console.log(error.message);
    }
}
// function showTime() {
//   let date = new Date();
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   hour = hour < 10 ? "0" + hour : hour;
//   min = min < 10 ? "0" + min : min;
//   sec = sec < 10 ? "0" + sec : sec;
//   $("#clock").html(
//     `Time &nbsp;&nbsp; <span style="color: #811618ad;">${hour}</span> : <span style="color: #811618ad;">${min}</span> : <span style="color: #811618ad;">${sec}</span>`
//   );
//   setTimeout(showTime, 1000);
// }
server.listen(port, () => {
    console.log(`Server listening on port ${port}, url: http://localhost:${port}/`);
});
