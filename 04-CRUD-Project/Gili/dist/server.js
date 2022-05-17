console.log("Connected!");
//@ts-ignore
var express = require('express');
var app = express();
//@ts-ignore
var port = process.env.PORT || 3000;
app.use(express.json());
var isXturn = true;
var sq = 'sq';
var room1arr = [];
var room2arr = [];
var room3arr = [];
app.use(express.static('public'));
app.listen(port, function () {
    console.log("server is listening on port " + port);
});
var Squre = /** @class */ (function () {
    function Squre(id, isSqurefull, isSqureX, isSqureO) {
        this.id = id;
        this.isSqurefull = isSqurefull;
        this.isSqureX = isSqureX;
        this.isSqureO = isSqureO;
    }
    return Squre;
}());
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
function NewArrayByRoom(roomId) {
    if (roomId === 1) {
        var fullArr1 = CreateArray(room1arr);
        return fullArr1;
    }
    else if (roomId === 2) {
        var fullArr2 = CreateArray(room2arr);
        return fullArr2;
    }
    else if (roomId === 3) {
        var fullArr3 = CreateArray(room3arr);
        return fullArr3;
    }
}
function CreateArray(arr) {
    for (var i = 0; i < 9; i++) {
        var newSqure = new Squre("sq" + i, 0, 0, 0);
        arr.push(newSqure);
    }
    return arr;
}
app.send('/api/roomID', function (req, res) {
    var roomId = req.body.roomId;
    if (!roomId)
        throw new Error('roomId is required');
    NewArrayByRoom(roomId);
    res.send({});
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
