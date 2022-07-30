let io;
let axios;
const clientUrl = window.location.origin;
let socket = io(clientUrl);


// game
// const joinRoomButton: any = document.querySelector("#gameRoomBtn");
const gameRoomInput: any = document.querySelector("#gameRoomInput");
// const roomForm: any = document.querySelector("#gameRoomForm");
// chat
const joinChatRoomBtn: any = document.querySelector("#chatRoomBtn");
const chatForm: any = document.querySelector("#chatForm");
const chatInput = document.querySelector(
  "#chatMessageInput"
) as HTMLInputElement;
const chatRoomInput = document.querySelector(
  "#chatRoomInput"
) as HTMLInputElement;
// const chatMessage = document.querySelector("#chat-container") as HTMLInputElement;

let myMove = true;
let symbol;
let lost = 0;
let score = 0;
let sec = 0;
let min = 0;

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
    displayChatMessage(`You connected with id: ${socket.id}`);
    showTime();
    $("#timer").css("display", "none");
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
    $("#chat-container").append(div);
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

    // showTime();
    
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

    // lost = data.lost;
    // score = data.score;
    // lost = 0;
    // score = 0;

    if (!isGameOver()) {
      renderTurnMessage();
    } else {

      $("#clock").css("display", "block");
      $("#timer").css("display", "none");
    
      if (myMove) {
      
        lost++;

        $(".nav__message")
          .text("Ups..You lost :(")
          .css("font-family", "Monoton")
          .css("color", "#202a438f")
          .css("font-size", "1.6em")
          .css("font-weight", "bold");

        // async function updateLost(playerID: string) {

        //   const { data } = await axios.patch("/players/update-lost", { lost, playerID });
        //   const { lost } = data;
        //   console.log("lost:", lost);
        // }
      } else {
      
        score++;
        $(".nav__message")
          .text("Congrats! You Win! :)")
          .css("font-family", "Monoton")
          .css("color", "#491b938b")
          .css("font-size", "1.6em")
          .css("font-weight", "bold");

        // const { data } = await axios.patch("/players/update-score", { score });
        // const { score } = data;
        console.log("score:", score);
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
    timer();
    $("#clock").css("display", "none");
    $("#timer").css("display", "block");
    renderTurnMessage();
    $("#opponentName").html(`<p>You playing with ${data.id}</p>`);
    $("#playingSymbol").html(
      `<span style="color: #811618ad; font-size: 1.5em; font-weight: bold;">${data.symbol} </span> is playing`
    );
  } catch (error) {
    console.error(error.message);
  }
});

socket.on

socket.on("opponent-left", () => {
  try {
    $(".nav__message").text("Your opponent has left the game");
    $(".container__game__board__cell").attr("disabled", true);
    $("#clock").css("display", "block");
    $("#timer").css("display", "none");
  } catch (error) {
    console.error(error.message);
  }
  showTime();
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
      $(".nav__message").text("Turn of your opponent");
      $(".container__game__board__cell").attr("disabled", true);
    } else {
      $(".nav__message").text("Make a move");
      $(".container__game__board__cell").removeAttr("disabled");
    }
  } catch (error) {
    console.error(error.message);
  }
}

function handleJoinGameRoom(e) {
  try {
    // e.preventDefault();
    const room = gameRoomInput.value;
    console.log(room);
    // Client initiats the request to the server to Join the room.
    socket.emit("join-game-room", room, (message) => {
      $("#joinedGameRoom").text("Privet room is empty").css("display", "none");
      displayJoinedRoomMessage(message);
      $("#joinedGameRoom").text(`${message}`).css("display", "block");
    });

  } catch (error) {
    console.error(error);
  }
}

function displayJoinedRoomMessage(message) {
  try {
    const div = document.createElement("div");
    div.textContent = message;
    $("#joinedGameRoom").append(div);
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

function displayGameMessage(message) {
  try {
    const div = document.createElement("span");
    div.textContent = message;
    $(".nav__message").append(div);
  } catch (error) {
    console.error(error);
  }
}

// =====================================================

function handleBackToGame() {
  try {
    window.location.href = "./game.html";
  } catch (error) {
    console.error(error);
  }
}

function handleGoToStats() {
  try {
    window.location.href = "./statistic.html";
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
    const { player } = data;
    console.log(data);
    if (!player) throw new Error("player not found");
    console.log("This player from getPlayerByCookie:", player);

    const { name } = player;
    console.log("name is:", name);

    const greetingFunc = timeOfDay();
    $("#greeting").html(`<h2>Good ${greetingFunc}, ${name}!</h2>`);
  } catch (error) {
    console.error(error.message);
  }
}

// =============================================

function timeOfDay() {
  let realtoday = new Date();
  let realtime = realtoday.getHours();

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



function timer(): void {
  sec = 0;
  min = 0;

  if (min < 10) {
    min = `0${min}`;
  }
  setInterval(() => {
    sec++;

    if (sec < 10) {
      sec = `0${sec}`;
    }

    if (sec === 60) {
      min++;
      if (min < 10) {
        min = `0${min}`;
      }
      sec = 0;
    }

    $("#timer").html(`Timer &nbsp;&nbsp;<span style="color: #811618ad;">${min}</span> : <span style="color: #811618ad;">${sec}</span>`);
  }, 1000);
}




function showTime(){
  let date = new Date();
  let hour = date.getHours(); 
  let min = date.getMinutes(); 
  let sec = date.getSeconds(); 

  hour = (hour < 10) ? "0" + hour : hour;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;
    
  $("#clock").html(
    `Time &nbsp;&nbsp; <span style="color: #811618ad;">${hour}</span> : <span style="color: #811618ad;">${min}</span> : <span style="color: #811618ad;">${sec}</span>`
  );
  setTimeout(showTime, 1000);
}

// showTime();



// const winPerc = Math.floor((playerWins / playerPlayed) * 100);