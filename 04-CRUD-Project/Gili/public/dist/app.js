var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var gameWrapper = document.querySelector('.game_wrapper');
var isGameWinX = false;
var isGameWinO = false;
// async function getRoomID(){
// 	const roomId = window.location.search.substr(1);
// 	const { data } = await axios.send('/api/roomID', { roomId });
// }
function hundleClick(squreId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, squreArr, isXturn, win, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/api/next-turn', { squreId: squreId })];
                case 1:
                    data = (_a.sent()).data;
                    squreArr = data.squreArr, isXturn = data.isXturn;
                    renderSqure(squreArr);
                    win = checkIfWin(squreArr);
                    whoWon(win);
                    error = data.error;
                    if (error)
                        throw new Error(error);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getTableStatus() {
    return __awaiter(this, void 0, void 0, function () {
        var data, squreArr, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/api/table-status')];
                case 1:
                    data = (_a.sent()).data;
                    squreArr = data.squreArr;
                    renderSqure(squreArr);
                    error = data.error;
                    if (error)
                        throw new Error(error);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderSqure(squreArr) {
    gameWrapper.innerHTML = '';
    var html = '';
    squreArr.forEach(function (squre) {
        if (squre.isSqureX) {
            html += "<div id='" + squre.id + "' class=\"squre black\" onclick=\"hundleClick('" + squre.id + "')\"></div> ";
        }
        else if (squre.isSqureO) {
            html += "<div id='" + squre.id + "' class=\"squre wheat\" onclick=\"hundleClick('" + squre.id + "')\"></div> ";
        }
        else {
            html += "<div id='" + squre.id + "' class=\"squre\" onclick=\"hundleClick('" + squre.id + "')\"></div> ";
        }
    });
    console.log(html);
    gameWrapper.innerHTML = html;
}
function checkIfWin(squreArr) {
    if (squreArr[0].isSqureX && squreArr[1].isSqureX && squreArr[2].isSqureX) {
        return (isGameWinX = true);
    }
    else if (squreArr[3].isSqureX && squreArr[4].isSqureX && squreArr[5].isSqureX) {
        return (isGameWinX = true);
    }
    else if (squreArr[6].isSqureX && squreArr[7].isSqureX && squreArr[8].isSqureX) {
        return (isGameWinX = true);
    }
    else if (squreArr[0].isSqureX && squreArr[4].isSqureX && squreArr[8].isSqureX) {
        return (isGameWinX = true);
    }
    else if (squreArr[2].isSqureX && squreArr[4].isSqureX && squreArr[6].isSqureX) {
        return (isGameWinX = true);
    }
    else if (squreArr[0].isSqureO && squreArr[1].isSqureO && squreArr[2].isSqureO) {
        return (isGameWinO = true);
    }
    else if (squreArr[3].isSqureO && squreArr[4].isSqureO && squreArr[5].isSqureO) {
        return (isGameWinO = true);
    }
    else if (squreArr[6].isSqureO && squreArr[7].isSqureO && squreArr[8].isSqureO) {
        return (isGameWinO = true);
    }
    else if (squreArr[0].isSqureO && squreArr[4].isSqureO && squreArr[8].isSqureO) {
        return (isGameWinO = true);
    }
    else if (squreArr[2].isSqureO && squreArr[4].isSqureO && squreArr[6].isSqureO) {
        return (isGameWinO = true);
    }
}
function whoWon(win) {
    if (isGameWinO) {
        alert("User O won!");
    }
    else if (isGameWinX) {
        alert("User X won!");
    }
}
setInterval(getTableStatus, 1000);
// const link = document.querySelector('.link')
// const randomNum = () => {
//     return Math.round(Math.random() * 10)
// }
// console.log(randomNum())
// link.addEventListener('click', () => {
//     link.href = `room.html?${randomNum()}`
// })
