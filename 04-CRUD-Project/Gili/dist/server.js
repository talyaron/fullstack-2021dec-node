console.log("Connected!");
//@ts-ignore
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var Server = require('socket.io').Server;
var io = new Server(server);
var users = 0;
server.listen(3000, function () {
    console.log('listening on *:3000');
});
io.on('connection', function (socket) {
    users++;
    console.log("user number " + users + " has connected to room");
    socket.on('disconnect', function () {
        users--;
        console.log("user number " + users + " has connected to room");
    });
});
app.use(express.json());
var isXturn = true;
app.use(express.static('public'));
var squreArr = [
    {
        id: 'sq0',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq1',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq2',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq3',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq4',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq5',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq6',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq7',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 'sq8',
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    }
];
app.get('/api/roomID', function (req, res) {
    var roomId = req.body.roomId;
    if (!roomId)
        throw new Error('roomId is required');
    // NewArrayByRoom(roomId);
    res.send({ data: "approved roomId is: " + roomId });
});
app.post('/api/next-turn', function (req, res) {
    try {
        var squreId = req.body.squreId;
        if (!squreId)
            throw new Error('squreId is required');
        renderSymbol(squreId);
        res.send({ squreArr: squreArr, isXturn: isXturn });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/table-status', function (req, res) {
    res.send({ squreArr: squreArr });
});
app.get('/api/reset-game', function (req, res) {
    if (!isXturn) {
        isXturn = true;
    }
    ;
    squreArr.forEach(function (squre) {
        if (squre.isSqurefull) {
            squre.isSqurefull = 0;
            squre.isSqureX = 0;
            squre.isSqureO = 0;
        }
    });
    res.send({ squreArr: squreArr, isXturn: isXturn });
});
function renderSymbol(squreId) {
    squreArr.forEach(function (squre) {
        if (squre.id === squreId) {
            if (squre.isSqurefull === 0) {
                if (isXturn) {
                    squre.isSqurefull = 1;
                    squre.isSqureX = 1;
                    nextTurn();
                }
                else if (!isXturn) {
                    squre.isSqurefull = 1;
                    squre.isSqureO = 1;
                    nextTurn();
                }
            }
        }
    });
}
function nextTurn() {
    if (isXturn) {
        isXturn = false;
    }
    else if (!isXturn) {
        isXturn = true;
    }
}
// console.log(window.location.search.substr(1))
