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
var io;
var axios;
var clientUrl = window.location.origin;
var socket = io(clientUrl);
var gameRoomInput = document.querySelector("#gameRoomInput");
var chatInput = document.querySelector("#chatMessageInput");
var chatRoomInput = document.querySelector("#chatRoomInput");
var myMove = true;
var symbol;
var lost = 0;
var score = 0;
var sec = 0;
var min = 0;
function handleLoad() {
    try {
        getPlayerByCookie();
    }
    catch (error) {
        console.error(error);
    }
}
// CHAT ===========================================
socket.on("connect", function () {
    try {
        displayChatMessage("You connected with id: " + socket.id);
        showTime();
        $("#timer").css("display", "none");
    }
    catch (error) {
        console.error(error.message);
    }
});
socket.on("recieve-message", function (message) {
    try {
        displayChatMessage(message);
    }
    catch (error) {
        console.error(error.message);
    }
});
$("#chatForm").submit(function (e) {
    try {
        e.preventDefault();
        var message = chatInput.value;
        var room = chatRoomInput.value;
        if (message === "")
            return;
        displayChatMessage(message);
        socket.emit("send-message", message, room);
        chatInput.value = "";
    }
    catch (error) {
        console.error(error.message);
    }
});
$("#chatRoomBtn").click(function () {
    try {
        var room = chatRoomInput.value;
        // Client initiats the request to the server to Join the room.
        socket.emit("join-room", room, function (message) {
            displayChatMessage(message);
        });
    }
    catch (error) {
        console.error(error.message);
    }
});
function displayChatMessage(message) {
    try {
        var div = document.createElement("div");
        div.textContent = message;
        $("#chat-container").append(div);
    }
    catch (error) {
        console.error(error.message);
    }
}
// GAME =================================================
function getBoardState() {
    try {
        var obj_1 = {};
        $(".container__game__board__cell").each(function () {
            obj_1[$(this).attr("id")] = $(this).text() || "";
        });
        return obj_1;
    }
    catch (error) {
        console.error(error.message);
    }
}
socket.on("game-begin", function (data) {
    try {
        symbol = data.symbol;
        myMove = symbol === "X";
        timer();
        $("#clock").css("display", "none");
        $("#timer").css("display", "block");
        renderTurnMessage();
        $("#playingSymbol").html("<span style=\"color: #811618ad; font-size: 1.5em; font-weight: bold;\">" + data.symbol + " </span> is playing");
    }
    catch (error) {
        console.error(error.message);
    }
});
socket.on;
function makeMove() {
    try {
        if (!myMove) {
            return; // Shouldn't happen since the board is disabled
        }
        if ($(this).text().length) {
            return; // If cell is already checked
        }
        socket.emit("make-move", {
            // Valid move (on client side) -> emit to server
            symbol: symbol,
            position: $(this).attr("id")
        });
    }
    catch (error) {
        console.error(error.message);
    }
}
// Bind event on players move
socket.on("move-made", function (data) {
    try {
        $("#" + data.position).text(data.symbol);
        // If the symbol of the last move was the same as the current player
        // means that now is opponent's turn
        myMove = data.symbol !== symbol;
        if (!isGameOver()) {
            renderTurnMessage();
        }
        else {
            $("#clock").css("display", "block");
            $("#timer").css("display", "none");
            if (myMove) {
                $(".nav__message")
                    .text("Ups..You lost :(")
                    .css("font-family", "Monoton")
                    .css("color", "#202941c4")
                    .css("font-size", "1.7em");
            }
            else {
                $(".nav__message")
                    .text("Congrats! You Win! :)")
                    .css("font-family", "Monoton")
                    .css("color", "#085861")
                    .css("font-size", "1.7em");
                console.log("score:", score);
            }
            $(".container__game__board__cell").attr("disabled", true); // Disable board
        }
    }
    catch (error) {
        console.error(error.message);
    }
});
socket.on("opponent-left", function () {
    try {
        $(".nav__message").text("Your opponent has left the game");
        $(".container__game__board__cell").attr("disabled", true);
        $("#clock").css("display", "block");
        $("#timer").css("display", "none");
    }
    catch (error) {
        console.error(error.message);
    }
    showTime();
});
function isGameOver() {
    try {
        var winCombination = getBoardState();
        var matches = ["XXX", "OOO"];
        var rows = [
            winCombination.cell0 + winCombination.cell1 + winCombination.cell2,
            winCombination.cell3 + winCombination.cell4 + winCombination.cell5,
            winCombination.cell6 + winCombination.cell7 + winCombination.cell8,
            winCombination.cell0 + winCombination.cell3 + winCombination.cell6,
            winCombination.cell1 + winCombination.cell4 + winCombination.cell7,
            winCombination.cell2 + winCombination.ce5l5 + winCombination.cell8,
            winCombination.cell0 + winCombination.cell4 + winCombination.cell8,
            winCombination.cell2 + winCombination.cell4 + winCombination.cell6,
        ];
        for (var i = 0; i < rows.length; i++) {
            if (rows[i] === matches[0] || rows[i] === matches[1]) {
                return true;
            }
        }
        return false;
    }
    catch (error) {
        console.error(error.message);
    }
}
$(function () {
    try {
        $(".container__game__board__cell").attr("disabled", true);
        $(".container__game__board__cell").on("click", makeMove);
    }
    catch (error) {
        console.error(error.message);
    }
});
function renderTurnMessage() {
    try {
        if (!myMove) {
            $(".nav__message").text("Turn of your opponent");
            $(".container__game__board__cell").attr("disabled", true);
        }
        else {
            $(".nav__message").text("Make a move");
            $(".container__game__board__cell").removeAttr("disabled");
        }
    }
    catch (error) {
        console.error(error.message);
    }
}
function handleJoinGameRoom(e) {
    try {
        // e.preventDefault();
        var room = gameRoomInput.value;
        console.log(room);
        // Client initiats the request to the server to Join the room.
        socket.emit("join-game-room", room, function (message) {
            $("#joinedGameRoom").text("Privet room is empty").css("display", "none");
            displayJoinedRoomMessage(message);
            $("#joinedGameRoom").text("" + message).css("display", "block");
            $(".container__game__board__cell").attr("disabled", true);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function displayJoinedRoomMessage(message) {
    try {
        var div = document.createElement("div");
        div.textContent = message;
        $("#joinedGameRoom").append(div);
        console.log(message);
    }
    catch (error) {
        console.error(error);
    }
}
function displayGameMessage(message) {
    try {
        var div = document.createElement("span");
        div.textContent = message;
        $(".nav__message").append(div);
    }
    catch (error) {
        console.error(error);
    }
}
// =====================================================
function handleBackToGame() {
    try {
        window.location.href = "./game.html";
    }
    catch (error) {
        console.error(error);
    }
}
function handleGoToStats() {
    try {
        window.location.href = "./statistic.html";
    }
    catch (error) {
        console.error(error);
    }
}
// REGISTER / LOGIN ========================================
function handleRegister(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, email, password, data, error, player, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    _a = e.target.elements, name = _a.name, email = _a.email, password = _a.password;
                    name = name.value;
                    email = email.value;
                    password = password.value;
                    return [4 /*yield*/, axios.post("/players/register", {
                            name: name,
                            email: email,
                            password: password
                        })];
                case 1:
                    data = (_b.sent()).data;
                    error = data.error, player = data.player;
                    // if(error) throw error;
                    console.log(player);
                    // e.target.reset();
                    if (error) {
                        alert("Couldn`t register player");
                    }
                    else {
                        window.location.href = "./game.html";
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleLogin(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, data, error, player, entrances, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    _a = e.target.elements, email = _a.email, password = _a.password;
                    email = email.value;
                    password = password.value;
                    return [4 /*yield*/, axios.post("/players/login", { email: email, password: password })];
                case 1:
                    data = (_b.sent()).data;
                    error = data.error, player = data.player, entrances = data.entrances;
                    console.log("This is the player from handleLogin:", player);
                    console.log("This is the Data from handleLogin:", data);
                    // e.target.rest();
                    if (!player) {
                        alert("Username or password is incorrect");
                    }
                    else {
                        window.location.href = "./game.html";
                    }
                    if (error && error.includes("E11000"))
                        alert("This email is already in use");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getPlayerByCookie() {
    return __awaiter(this, void 0, void 0, function () {
        var data, player1, player2, name, greetingFunc, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/players/player-by-cookie")];
                case 1:
                    data = (_a.sent()).data;
                    player1 = data.player1, player2 = data.player2;
                    console.log(data);
                    if (!player1)
                        throw new Error("player not found");
                    if (!player2)
                        throw new Error("player not found");
                    console.log("This player1 from getPlayerByCookie:", player1);
                    console.log("This player2 from getPlayerByCookie:", player2);
                    name = player1.name;
                    console.log("name is:", name);
                    greetingFunc = timeOfDay();
                    $("#greeting").html("<h2>Good " + greetingFunc + ", " + name + "!</h2>");
                    $("#opponentName").html("\n    <div class=\"container__currentStatistic__gemerIcons\">\n      <div>\n         <span class=\"material-icons\">person</span>\n         <p>" + player1.name + "</p>\n      </div>\n    <div>VS</div>\n      <div>\n         <span class=\"material-icons\">perm_identity</span>\n        <p>" + player2.name + "</p>\n      </div>\n    </div>\n    ");
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// =============================================
function timeOfDay() {
    var realtoday = new Date();
    var realtime = realtoday.getHours();
    if ((realtime >= 0 && realtime <= 5) || (realtime >= 22 && realtime <= 24)) {
        return "night";
    }
    if (realtime >= 6 && realtime <= 11) {
        return "morning";
    }
    if (realtime >= 12 && realtime <= 17) {
        return "afternoon";
    }
    if (realtime >= 18 && realtime <= 21) {
        return "evening";
    }
}
function timer() {
    sec = 0;
    min = 0;
    if (min < 10) {
        min = "0" + min;
    }
    setInterval(function () {
        sec++;
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (sec === 60) {
            min++;
            if (min < 10) {
                min = "0" + min;
            }
            sec = 0;
        }
        $("#timer").html("Timer &nbsp;&nbsp;<span style=\"color: #811618ad;\">" + min + "</span> : <span style=\"color: #811618ad;\">" + sec + "</span>");
    }, 1000);
}
function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    $("#clock").html("Time &nbsp;&nbsp; <span style=\"color: rgba(15, 15, 130, 0.715);\">" + hour + "</span> : <span style=\"color: rgba(15, 15, 130, 0.715);\">" + min + "</span> : <span style=\"color: rgba(15, 15, 130, 0.715);\">" + sec + "</span>");
    setTimeout(showTime, 1000);
}
