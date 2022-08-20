"use strict";

var path = require('path');

var http = require('http');

var express = require('express');

var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio(server);
app.use(express["static"](path.join(__dirname, 'public')));
io.on('connection', function (socket) {
  console.log('new user is connected');
  socket.emit('message', 'welcome to chat');
});
var PORT = 3000 || process.env.PORT;
server.listen(PORT, function () {
  return console.log("server running on port ".concat(PORT));
});