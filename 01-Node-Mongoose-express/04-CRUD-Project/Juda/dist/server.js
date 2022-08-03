var path = require('path');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var stringify = require('querystring').stringify;
var app = express();
var server = http.createServer(app);
var io = socketio(server);
app.use(express.json());
app.use(express.static('public'));
var players = [
    { userId: "", userName: "", symbol: "x" },
    { userId: "", userName: "", symbol: "o" },
];
app.put('/api/insertUserName', function (req, res) {
    try {
        var userInsertName = req.body.userInsertName;
        console.log(userInsertName);
        if (players[0].userName == "") {
            players[0].userName = userInsertName;
            console.log("player 1 is " + players[0].userName);
            res.send({ player: players[0] });
        }
        else if (players[1].userName == "") {
            players[1].userName = userInsertName;
            console.log("player 2 is " + players[1].userName);
            res.send({ player: players[1] });
        }
        else {
            console.log('there are already 2 players');
        }
    }
    catch (error) {
        console.log(error);
    }
});
// io.on('connection', socket => {
//     console.log('new user is connected');
//     socket.emit('message', 'welcome to chat')
// });
var PORT = 3000 || process.env.PORT;
server.listen(PORT, function () { return console.log("server running on port " + PORT); });
