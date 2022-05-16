console.log("Connected!");
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
var isXturn = true;
app.use(express.static('public'));
app.listen(port, function () {
    console.log("server is listening on port " + port);
});
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
