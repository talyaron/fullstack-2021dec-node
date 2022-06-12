const path = require('path');
const http = require('http');

const express = require('express');
const socketio = require('socket.io');
const { stringify } = require('querystring');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.json());
app.use(express.static('public'))


interface Players {
    userId: string;
    userName: string;
    symbol: string;

}

let players: Array<Players> = [
    { userId: "", userName: "", symbol: "x" },
    { userId: "", userName: "", symbol: "o" },
];

app.put('/api/insertUserName', (req, res) => {
    try {
        let {userInsertName}  = req.body;
        console.log(userInsertName)
        if (players[0].userName == "") {
            players[0].userName = userInsertName
            console.log(`player 1 is ${players[0].userName}`)
            res.send({ player: players[0] })
        }
        else if (players[1].userName == "") {
            players[1].userName = userInsertName
            console.log(`player 2 is ${players[1].userName}`)
            res.send({ player: players[1] })
        }
        else {

            console.log('there are already 2 players')
        }



    } catch (error) {
        console.log(error)
    }
});






// io.on('connection', socket => {
//     console.log('new user is connected');
//     socket.emit('message', 'welcome to chat')

// });









const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));


