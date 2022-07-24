var io;
var clientUrl = window.location.origin;
var socket = io(clientUrl);
// game
var joinRoomButton = document.querySelector("#gameRoomBtn");
var gameRoomInput = document.querySelector("#gameRoomInput");
var roomForm = document.querySelector("#gameRoomForm");
// chat
var joinChatRoomBtn = document.querySelector("#chatRoomBtn");
var chatForm = document.querySelector("#chatForm");
var chatInput = document.querySelector("#chatMessageInput");
var chatRoomInput = document.querySelector("#chatRoomInput");
var chatMessage = document.querySelector("#chat-container");
var myMove = true;
var symbol;
// CHAT ===========================================
socket.on("connect", function () {
    try {
        displayChatMessage("You connected with id: " + socket.id);
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
chatForm.addEventListener("submit", function (e) {
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
joinChatRoomBtn.addEventListener("click", function () {
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
        document.querySelector("#chat-container").append(div);
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
            if (myMove) {
                $("#message").text("You lost :(");
                $("#message").css("background", "#aa1f215c");
                $("#message").css("color", "white");
            }
            else {
                $("#message").text("You Win! :)");
                $("#message").css("background", "#006e7a40");
                $("#message").css("color", "white");
                // call function update score to winner
                handleUpdateWinnerScore();
                //
            }
            $(".container__game__board__cell").attr("disabled", true); // Disable board
        }
    }
    catch (error) {
        console.error(error.message);
    }
});
socket.on("game-begin", function (data) {
    try {
        symbol = data.symbol; // The server is assigning the symbol
        myMove = symbol === "X"; // 'X' starts first
        renderTurnMessage();
    }
    catch (error) {
        console.error(error.message);
    }
});
socket.on("opponent-left", function () {
    try {
        $("#message").text("Your opponent has left the game");
        $(".container__game__board__cell").attr("disabled", true);
    }
    catch (error) {
        console.error(error.message);
    }
});
// Binding buttons on the board
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
            $("#message").text("Turn of your opponent");
            $(".container__game__board__cell").attr("disabled", true);
        }
        else {
            $("#message").text("Make a move");
            $(".container__game__board__cell").removeAttr("disabled");
        }
    }
    catch (error) {
        console.error(error.message);
    }
}
function handleJoinGameRoom(e) {
    try {
        var room = gameRoomInput.value;
        // Client initiats the request to the server to Join the room.
        socket.emit("join-game-room", room, function (message) {
            displayGameMessage(message);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function displayGameMessage(message) {
    try {
        var div = document.createElement("div");
        div.textContent = message;
        document.querySelector("#messager").append(div);
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateWinnerScore() {
    console.log("test update score on win");
}
