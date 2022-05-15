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
        id: 0,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 1,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 2,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 3,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 4,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 5,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 6,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 7,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
    {
        id: 8,
        isSqurefull: 0,
        isSqureX: 0,
        isSqureO: 0
    },
];
app.post('/api/drawSymbol', function (req, res) {
    try {
        var squreId = req.body.squreId;
        if (!squreId)
            throw new Error('squreId is required');
        renderSymbol(squreId);
        res.send({ squreArr: squreArr });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
function renderSymbol(squreId) {
    if (squreArr[squreId].isSqurefull === 0) {
        if (isXturn) {
            squreArr[squreId].isSqurefull = 1;
            squreArr[squreId].isSqureX = 1;
        }
        else if (!isXturn) {
            squreArr[squreId].isSqurefull = 1;
            squreArr[squreId].isSqureO = 1;
        }
    }
}
;
function nextTurn() {
    if (isXturn) {
        isXturn = false;
    }
    else if (!isXturn) {
        isXturn = true;
    }
}
// console.log(window.location.search.substr(1))
