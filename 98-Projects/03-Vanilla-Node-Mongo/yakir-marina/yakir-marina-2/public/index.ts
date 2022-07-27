let io;
let axios;
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


function handleLoad() {
  try {
    getPlayerByCookie();
  } catch (error) {
    console.error(error);
  }
}










// CHAT ===========================================
socket.on("connect", () => {
  try {
    // displayChatMessage(`You connected with id: ${socket.id}`);
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
        $("#message")
          .text("Ups..You lost :(")
          .css("color", "white")
          .css("font-weight", "normal");
        $("#message").css("background", "#aa1f215c");
        // $("#message").css("color", "white").css("font-weight", "normal");
      } else {
        $("#message")
          .text("Congrats! You Win! :)")
          .css("color", "white")
          .css("font-weight", "normal");
        $("#message").css("background", "#006e7a40")
        // $("#message").css("color", "white").css("font-weight", "normal");
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
      displayJoinedRoomMessage(message);
    });
  } catch (error) {
    console.error(error);
  }
}

function displayJoinedRoomMessage(message) {
  try {
    const div = document.createElement("div");
    div.textContent = message;
    // $("#joinedGameRoom").css("display", "block").append(div);
    $("#joinedGameRoom").append(div);
  } catch (error) {
    console.error(error);
  }
}

function displayGameMessage(message) {
  try {
    const div = document.createElement("div");
    div.textContent = message;
    $("#message").append(div);
  } catch (error) {
    console.error(error);
  }
}















// REGISTER / LOGIN ========================================

async function handleRegister(e) {
  try {
    e.preventDefault();
    let { name, email, password } = e.target.elements;
    name = name.value;
    email = email.value;
    password = password.value;
    const { data } = await axios.post("/players/register", {
      name,
      email,
      password,
    });
    const { error, player } = data;
    // if(error) throw error;
    console.log(player);
    // e.target.reset();
    if (error) {
      alert("Couldn`t register player");
    } else {
      window.location.href = "./game.html";
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function handleLogin(e) {
  try {
    e.preventDefault();
    let { email, password } = e.target.elements;
    email = email.value;
    password = password.value;
    const { data } = await axios.post("/players/login", { email, password });
    const { error, player, entrances } = data;

    console.log("This is the player from handleLogin:", player);
    console.log("This is the Data from handleLogin:", data);

    // e.target.rest();
    if (!player) {
      alert("Username or password is incorrect");
    } else {
      window.location.href = "./game.html";
    }
    if (error && error.includes("E11000"))
      alert("This email is already in use");
  } catch (error) {
    console.error(error.message);
  }
}

async function getPlayerByCookie() {
  try {
    const { data } = await axios.get("/players/player-by-cookie");
    const { player, decodedCookie } = data;
    if (!player) throw new Error("player not found");
    console.log("This player from getPlayerByCookie:", player);

    
    console.log("decodedCookie is: ", decodedCookie);
    const { name } = player;
    console.log("name is:", name);
    
    const gameRoot: any = document.querySelector("#gameRoot");
    gameRoot.innerHTML = `<h2>Wellcome, ${decodedCookie.name}!</h2>`;
    displayChatMessage(`You connected as ${decodedCookie.name}`); 
    // gameRoot.innerHTML = `<h1>Wellcome, ${name}!</h1>`;
  } catch (error) {
    console.error(error.message);
  }
}

