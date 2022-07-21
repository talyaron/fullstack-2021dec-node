let io;
// const clientUrl = window.location.origin; 
// let socket = io(clientUrl);
let socket = io();

let myMove = true;
let symbol;


socket.on("connect", () => {
  let user = socket.id;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  user.nnerHTML = "#" + randomColor;
});

function getBoardState() {
  let obj = {};
  
  /* We are creating an object where each attribute corresponds
   to the name of a cell (r0c0, r0c1, ..., r2c2) and its value is
   'X', 'O' or '' (empty).
  */
  $(".cell").each(function () {
    obj[$(this).attr("id")] = $(this).text() || "";
  });

  return obj;
}


function isGameOver() {
  let state = getBoardState();
  let matches = ["XXX", "OOO"]; // This are the string we will be looking for to declare the match over
  // We are creating a string for each possible winning combination of the cells
  let rows = [
    state.cell0 + state.cell1 + state.cell2, // 1st line
    state.cell3 + state.cell4 + state.cell5, // 2nd line
    state.cell6 + state.cell7 + state.cell8, // 3rd line
    state.cell0 + state.cell3 + state.cell6, // 1st column
    state.cell1 + state.cell4 + state.cell7, // 2nd column
    state.cell2 + state.ce5l5 + state.cell8, // 3rd column
    state.cell0 + state.cell4 + state.cell8, // Primary diagonal
    state.cell2 + state.cell4 + state.cell6, // Secondary diagonal
  ];

  // Loop through all the rows looking for a match
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === matches[0] || rows[i] === matches[1]) {
      return true;
    }
  }

  return false;
}

function renderTurnMessage() {
  if (!myMove) {
    // If not player's turn disable the board
    $("#message").text("The turn of your opponent");
    $(".cell").attr("disabled", true);
  } else {
    // Enable it otherwise
    $("#message").text("Your turn");
    $(".cell").removeAttr("disabled");
  }
}

function makeMove(e) {
  if (!myMove) {
    return; // Shouldn't happen since the board is disabled
  }

  if ($(this).text().length) {
    return; // If cell is already checked
  }

  socket.emit("make.move", {
    // Valid move (on client side) -> emit to server
    symbol: symbol,
    position: $(this).attr("id"),
  });
}

// Bind event on players move
socket.on("move.made", function (data) {
  $("#" + data.position).text(data.symbol); // Render move

  // If the symbol of the last move was the same as the current player
  // means that now is opponent's turn
  myMove = data.symbol !== symbol;

  if (!isGameOver()) {
    // If game isn't over show who's turn is this
    renderTurnMessage();
  } else {
    // Else show win/lose message
    if (myMove) {
      $("#message").text("You lost");
      $("#message").css("background", "#aa1f4d");
      $("#message").css("color", "white");
    } else {
      $("#message").text("You Win!");
      $("#message").css("background", "#16db93");
      $("#message").css("color", "white");
    }

    $(".cell").attr("disabled", true); // Disable board
  }
});

// Bind event for game begin
socket.on("game.begin", function (data) {
  symbol = data.symbol; // The server is assigning the symbol
  myMove = symbol === "X"; // 'X' starts first
  renderTurnMessage();
});

// Bind on event for opponent leaving the game
socket.on("opponent.left", function () {
  $("#message").text("Your opponent has left the game");
  $(".cell").attr("disabled", true);
});

// Binding buttons on the board
$(function () {
  $(".cell").attr("disabled", true);
  $(".cell").on("click", makeMove);
});

