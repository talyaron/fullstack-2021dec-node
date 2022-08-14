"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetGame = exports.getTableStatus = exports.nextTurnMove = exports.renderSymbol = exports.nextTurn = void 0;
let isXturn = true;
const squreArr = [
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
function nextTurn(req, res) {
    try {
        const { squreId } = req.body;
        if (!squreId)
            throw new Error('squreId is required');
        renderSymbol(squreId);
        res.send({ squreArr, isXturn });
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.nextTurn = nextTurn;
function renderSymbol(squreId) {
    squreArr.forEach((squre) => {
        if (squre.id === squreId) {
            if (squre.isSqurefull === 0) {
                if (isXturn) {
                    squre.isSqurefull = 1;
                    squre.isSqureX = 1;
                    nextTurnMove();
                }
                else if (!isXturn) {
                    squre.isSqurefull = 1;
                    squre.isSqureO = 1;
                    nextTurnMove();
                }
            }
        }
    });
}
exports.renderSymbol = renderSymbol;
function nextTurnMove() {
    if (isXturn) {
        isXturn = false;
    }
    else if (!isXturn) {
        isXturn = true;
    }
}
exports.nextTurnMove = nextTurnMove;
function getTableStatus(req, res) {
    res.send({ squreArr });
}
exports.getTableStatus = getTableStatus;
function resetGame(req, res) {
    if (!isXturn) {
        isXturn = true;
    }
    ;
    squreArr.forEach((squre) => {
        if (squre.isSqurefull) {
            squre.isSqurefull = 0;
            squre.isSqureX = 0;
            squre.isSqureO = 0;
        }
    });
    res.send({ squreArr, isXturn });
}
exports.resetGame = resetGame;
//# sourceMappingURL=squreCont.js.map