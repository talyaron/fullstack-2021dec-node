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
var axios;
var state = {
    timeRemaining: null,
    flippedSameID: [],
    flippedID: [],
    flipped: 0,
    totalFlipsStatist: 0,
    clickNumber: 0,
    totalTime: 10,
    matched: 0
};
var newLoadGame = function loadgame() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, cards, players;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getDeck()];
                case 1:
                    _a = _b.sent(), cards = _a.cards, players = _a.players;
                    renderPlayer(players);
                    renderDeck(cards);
                    return [2 /*return*/];
            }
        });
    });
};
function getDeck() {
    return __awaiter(this, void 0, void 0, function () {
        var data, players, cards, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/get-deck")];
                case 1:
                    data = (_a.sent()).data;
                    players = data.players, cards = data.cards;
                    console.log(data);
                    return [2 /*return*/, data];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleRegister(e) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.dir(e.target);
                    e.preventDefault();
                    name = e.target.elements.name.value;
                    console.log(e);
                    console.log(name);
                    return [4 /*yield*/, axios.post("/player-add", { name: name })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderPlayer(name);
                    window.location.href = "./game.html";
                    e.target.reset();
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
function renderPlayer(players) {
    var root = document.querySelector("#root");
    var html = "";
    players.forEach(function (player) {
        html += "\n       <div class=\"statistics\">\n        <p class=\"statistics__title\" id=\"game-title\">Game Statistics:</p>\n        <div class=\"statistics__info-player\">\n            <p>Player: <span style=\"color: rgb(163, 38, 24); font-weight: bold;\">" + player.name + "</span></p>\n        </div>\n        \n    </div>\n        ";
    });
    root.innerHTML = html;
}
function renderDeck(cards) {
    var root = document.querySelector("#root");
    var html = "";
    cards.forEach(function (card) {
        html += "\n        <div class=\"container__card\" onclick=\"handleFlipCard(event)\">\n              <img class=\"container__card__card-back container__card__card-face\" id=\"" + card.cardId + "\" src=\"./img/back.jpg\">       \n              <img class=\"container__card__card-front container__card__card-face\" id=\"" + card.cardId + "\" src=\"" + card.url + "\">           \n        </div>\n        ";
    });
    root.innerHTML = html;
}
// SOUNDS =====================================================================================
function gameOverSound() {
    var gameOver = document.querySelector("#gameOver");
    gameOver.play();
}
function startMusic() {
    var bgMusic = document.querySelector("#creepy");
    bgMusic.play();
    bgMusic.volume = 0.4;
    bgMusic.loop = true;
}
function stopMusic() {
    var bgMusic = document.querySelector("#creepy");
    bgMusic.pause();
}
function flipMusic() {
    var flip = document.querySelector("#flip");
    flip.play();
}
function matchSound() {
    var match = document.querySelector("#match");
    match.play();
}
// START / RESET / GAME OVER / RESTART GAME ===============================================================
function resetAll() {
    state.totalFlipsStatist = 0;
    state.clickNumber = 0;
    state.flipped = 0;
    state.matched = 0;
    stopMusic();
    newLoadGame();
}
var handleStartGame = function () {
    var winningMessage = document.querySelector("#winningMessage");
    state.totalTime = 10;
    resetAll();
    startMusic();
    handleRegister(event);
    state.timeRemaining = setInterval(function () {
        var timer = document.querySelector("#time-remaining");
        state.totalTime--;
        timer.innerText = "" + state.totalTime;
        if (state.totalTime === 0) {
            clearInterval(state.timeRemaining);
            gameOver();
        }
    }, 1000);
    winningMessage.classList.remove("show");
};
var gameOver = function gameOver() {
    gameOverSound();
    stopMusic();
    hideCards();
    state.totalFlipsStatist = 0;
    state.totalTime = 0;
    // winStateChack();
    drawMessage();
};
function handleRestartGame() {
    var winningMessage = document.querySelector("#winningMessage");
    winningMessage.classList.remove("show");
    handleStartGame();
}
// FLIPPING =============================================================================================
function handleFlipCard(e) {
    // const card: any = document.querySelector(".container__card__card-front");
    var ticker = document.querySelector("#flips");
    var cardOneId = e.target.id;
    var cardTowId = e.target.id;
    // let cardOneId = e.target.currentSrc;
    // let cardTowId = e.target.currentSrc;
    flipMusic();
    state.totalFlipsStatist++;
    ticker.innerText = state.totalFlipsStatist;
    // console.log(state.totalFlipsStatist);
    var element = e.currentTarget;
    if (state.clickNumber <= 2) {
        if (element.style.transform === "rotateY(180deg)") {
            setTimeout(function () {
                element.style.transform = "rotateY(0deg)";
            }, 1000);
            // checkFlipped(state.flippedID, state.flippedSameID);
        }
        else {
            element.style.transform = "rotateY(180deg)";
            // checkFlipped(state.flippedID, state.flippedSameID);
        }
    }
    else {
        // return card
        state.clickNumber = 0;
    }
    state.flipped++;
    if (cardOneId === cardTowId) {
        cardOneId.hidden = true;
        cardTowId.hidden = true;
        state.flippedSameID = [];
        state.matched++;
    }
    if (state.flippedSameID === 8) {
        victory();
    }
    // console.dir(card);
    console.dir(e.target.id);
}
// REMOVING ================================================================================
// VICTORY ========================================================
var victory = function victory() {
    var victory = document.querySelector("#victory");
    var bgMusic = document.querySelector("#creepy");
    victory.play();
    bgMusic.pause();
    hideCards();
    // winStateChack();
    winMessage();
};
// HIDE / WIN CHACK / WIN MESSAGE / =========================================
function hideCards() {
    var deck = document.querySelector(".container");
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
}
function winMessage() {
    var winningMessage = document.querySelector("#winningMessage");
    document.querySelector(".title-game").style.display = "none";
    winningMessage.innerHTML = "CONGRATS! <br> You Win!\n                                <img src=\"../img/queen.png\"></img>\n                                <button id=\"restartButton\" onclick=\"handleRestartGame()\">Restart</button>";
    winningMessage.classList.add("show");
}
function drawMessage() {
    var winningMessage = document.querySelector("#winningMessage");
    document.querySelector(".title-game").style.display = "none";
    winningMessage.innerHTML = "Game Over! <br> Maybe next time...\n                                <img src=\"../img/joker.png\"></img>\n                                <button id=\"restartButton\" onclick=\"handleRestartGame()\">Restart</button>";
    winningMessage.classList.add("show");
}
function getRootElement() {
    var rootHTML = document.querySelector(".root");
    return rootHTML;
}
function log(log) {
    // console.log(log)
    console.dir(log, "yoooohoooo");
}
