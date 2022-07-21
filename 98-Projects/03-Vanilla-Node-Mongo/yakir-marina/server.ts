console.log("Connected!");
import express from "express";
const app = express();

import mongoose from "mongoose";
let cookieParser = require("cookie-parser");

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

require("dotenv").config();
const url = process.env.MONGODB_URL as string;

const port = process.env.PORT || 4007;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

let clients = {};
let players = {};
let unmatched;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to DB:");
    console.log(err.message);
  });



io.on("connection", (socket) => {
  let id = socket.id;
  console.log("New user is connected ID:", socket.id);
  clients[socket.id] = socket;

  // console.log(socket);

  socket.on("disconnect", () => {
    console.log("The user is disconnected ID:", socket.id);
    delete clients[socket.id];
    socket.broadcast.emit("The user is disconnected", id);
  });

  join(socket); // Fill 'players' data structure

  if (opponentOf(socket)) {
    // If the current player has an opponent the game can begin
    socket.emit("game.begin", {
      // Send the game.begin event to the player
      symbol: players[socket.id].symbol,
    });

    opponentOf(socket).emit("game.begin", {
      // Send the game.begin event to the opponent
      symbol: players[opponentOf(socket).id].symbol,
    });
  }

  // Event for when any player makes a move
  socket.on("make.move", function (data) {
    if (!opponentOf(socket)) {
      // This shouldn't be possible since if a player doens't have an opponent the game board is disabled
      return;
    }

    // Validation of the moves can be done here

    socket.emit("move.made", data); // Emit for the player who made the move
    opponentOf(socket).emit("move.made", data); // Emit for the opponent
  });

  socket.on("disconnect", function () {
    if (opponentOf(socket)) {
      opponentOf(socket).emit("opponent.left");
    }
  });
});


function join(socket) {
  players[socket.id] = {
    opponent: unmatched,
    symbol: "X",
    socket: socket,
  };

  if (unmatched) {
    players[socket.id].symbol = "O";
    players[unmatched].opponent = socket.id;
    unmatched = null;
  } else {
    unmatched = socket.id;
  }
}

function opponentOf(socket) {
  if (!players[socket.id].opponent) {
    return;
  }
  return players[players[socket.id].opponent].socket;
}

server.listen(4007, () => {
  console.log('Server listening on port 4007');
});
