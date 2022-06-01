"use strict";
exports.__esModule = true;
console.log("Connected!");
//@ts-ignore
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var Server = require('socket.io').Server;
var io = new Server(server);
server.listen(3000, function () {
    console.log('listening on *:3000');
});
app.use(express.json());
app.use(express.static('public'));
var squareRoutes_1 = require("./routes/squareRoutes");
app.use("/squres", squareRoutes_1["default"]);
// console.log(window.location.search.substr(1))
