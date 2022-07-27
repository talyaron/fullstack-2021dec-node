let io;
const clientUrl = window.location.origin;
let socket = io(clientUrl);
// game
const joinRoomButton: any = document.querySelector("#gameRoomBtn");
const gameRoomInput: any = document.querySelector("#gameRoomInput");
const roomForm: any = document.querySelector("#gameRoomForm");
// chat
const joinChatRoomBtn: any = document.querySelector("#chatRoomBtn");
const chatForm: any = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatMessageInput") as HTMLInputElement;
const chatRoomInput = document.querySelector("#chatRoomInput") as HTMLInputElement;
const chatMessage = document.querySelector("#chat-container") as HTMLInputElement;

let myMove = true;
let symbol;

// CHAT ===========================================
socket.on("connect", () => {
  try {
    displayChatMessage(`You connected with id: ${socket.id}`);
  } catch (error) {
    console.error(error.message);
  }
});

socket.on("recieve-message", (message) => {
  try {
    displayChatMessage(message);
  } catch (error) {
    console.error(error.message);
  }
});

chatForm.addEventListener("submit", (e: any) => {
  try {
    e.preventDefault();
    const message = chatInput.value;
    const room = chatRoomInput.value;

    if (message === "") return;
    displayChatMessage(message);

    socket.emit("send-message", message, room);
    chatInput.value = "";
  } catch (error) {
    console.error(error.message);
  }
});

joinChatRoomBtn.addEventListener("click", () => {
  try {
    const room = chatRoomInput.value;
    // Client initiats the request to the server to Join the room.
    socket.emit("join-room", room, (message) => {
      displayChatMessage(message);
    });
  } catch (error) {
    console.error(error.message);
  }
});

function displayChatMessage(message) {
  try {
    const div = document.createElement("div");
    div.textContent = message;
    document.querySelector("#chat-container").append(div);
  } catch (error) {
    console.error(error.message);
  }
}


// GAME =================================================

function getBoardState() {
  try {
    let obj = {};

    $(".container__game__board__cell").each(function () {
      obj[$(this).attr("id")] = $(this).text() || "";
    });

    return obj;
  } catch (error) {
    console.error(error.message);
  }
}

function isGameOver() {
  try {
    let winCombination = getBoardState();
    let matches = ["XXX", "OOO"]; 
    
    let rows = [
      winCombination.cell0 + winCombination.cell1 + winCombination.cell2, 
      winCombination.cell3 + winCombination.cell4 + winCombination.cell5, 
      winCombination.cell6 + winCombination.cell7 + winCombination.cell8, 
      winCombination.cell0 + winCombination.cell3 + winCombination.cell6, 
      winCombination.cell1 + winCombination.cell4 + winCombination.cell7, 
      winCombination.cell2 + winCombination.ce5l5 + winCombination.cell8, 
      winCombination.cell0 + winCombination.cell4 + winCombination.cell8, 
      winCombination.cell2 + winCombination.cell4 + winCombination.cell6, 
    ];

    
    for (let i = 0; i < rows.length; i++) {
      if (rows[i] === matches[0] || rows[i] === matches[1]) {
        return true;
      }
    }

    return false;

  } catch (error) {
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
      position: $(this).attr("id"),
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Bind event on players move
socket.on("move-made", (data) => {
  try {
    $("#" + data.position).text(data.symbol); 

    // If the symbol of the last move was the same as the current player
    // means that now is opponent's turn
    myMove = data.symbol !== symbol;

    if (!isGameOver()) {
      renderTurnMessage();
    } else {
      
      if (myMove) {
        $("#message").text("You lost :(");
        $("#message").css("background", "#aa1f215c");
        $("#message").css("color", "white");
      } else {
        $("#message").text("You Win! :)");
        $("#message").css("background", "#006e7a40");
        $("#message").css("color", "white");

        // call function update score to winner
          handleUpdateWinnerScore()
        //
      }

      $(".container__game__board__cell").attr("disabled", true); // Disable board
    }
  } catch (error) {
    console.error(error.message);
  }
});


socket.on("game-begin", (data) => {
  try {
    symbol = data.symbol; // The server is assigning the symbol
    myMove = symbol === "X"; // 'X' starts first
    renderTurnMessage();
  } catch (error) {
    console.error(error.message);
  }
});


socket.on("opponent-left", () => {
  try {
    $("#message").text("Your opponent has left the game");
    $(".container__game__board__cell").attr("disabled", true);
  } catch (error) {
    console.error(error.message);
  }
});

// Binding buttons on the board
$(function () {
  try {
    $(".container__game__board__cell").attr("disabled", true);
    $(".container__game__board__cell").on("click", makeMove);
  } catch (error) {
    console.error(error.message);
  }
});

function renderTurnMessage() {
  try {
    if (!myMove) {
      $("#message").text("Turn of your opponent");
      $(".container__game__board__cell").attr("disabled", true);
    } else {
      $("#message").text("Make a move");
      $(".container__game__board__cell").removeAttr("disabled");
    }
  } catch (error) {
    console.error(error.message);
  }
}

function handleJoinGameRoom(e) {
  try {
    const room = gameRoomInput.value;
    // Client initiats the request to the server to Join the room.
    socket.emit("join-game-room", room, (message) => {
      displayGameMessage(message);
    });
  } catch (error) {
    console.error(error);
  }
}

function displayGameMessage(message) {
  try {
    const div = document.createElement("div");
    div.textContent = message;
    document.querySelector("#messager").append(div);
  } catch (error) {
    console.error(error);
  }
}


function handleUpdateWinnerScore(){

  console.log("test update score on win");

}
