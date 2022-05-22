"use strict";

// 1. creating WebSocket obj.
// 2.  creating onMessage() which get res with Obj from the server
// 3.  connection to the server ONLY by click on 'connect' button -- initiated by the client
// 9.  data = message.data
// 13.  recieving the available games list after connection to the server and getting the clientID:
// 14.  creating a new game -- initiated be the client
// 20.  the client initiated a new game creating. On the server was created the new game and
// 22.  -- initiated by the client. clicking on this gameID and then click 'join' button.
// clicked gameID go to the server as client request, and will be added by the server
// as the second player for this particular game.
// 25.  displaying grid
// 27.  updated board / move turn definding
// 28. makeMove()
// 29. cellClicked()
var winningMessage = document.querySelector("#winningMessage");
var sideBar = document.querySelector('.sideBar');
var board = document.querySelector('.board');
var cells = document.querySelectorAll('.cells');
var cell = document.querySelector('.cells');
var newGame = document.querySelector('.newGameBtn');
var join = document.querySelector('.joinBtn');
var connect = document.querySelector('.connectBtn');
var list = document.querySelector('ul');
var currentTurn = false;
newGame.disabled = true;
join.disabled = true;
var clientID;
var gameID;
var socket;
var mark;
var cross = 'x';
var circle = 'o'; // connection to the server by clicking on the connect button

connect.addEventListener('click', function (e) {
  socket = new WebSocket("ws://localhost:4006");
  socket.onmessage = onMessage;
  e.target.disabled = true;
}); // -- initiated by the client-- creating on the server

join.addEventListener('click', function () {
  socket.send(JSON.stringify({
    'tag': 'join',
    'clientID': clientID,
    'gameID': gameID
  }));
  console.log('the second player joined the game');
});

function onMessage(message) {
  var data = JSON.parse(message.data);

  switch (data.tag) {
    case "connected":
      clientID = data.clientID;
      console.log(clientID, data);
      console.log('the player is connected');
      var div = document.createElement("div");
      div.innerHTML = "PlayerID: ".concat(clientID);
      sideBar.prepend(div);
      newGame.disabled = false;
      join.disabled = false;
      break;

    case "gamesList":
      var games = data.list;
      console.log(data.list, data); // we lieve in the availible list game only one, the last most updated game

      while (list.firstChild) {
        list.removeChild(list.lastChild);
      }

      games.forEach(function (game) {
        var li = document.createElement("li");
        li.innerText = game;
        list.appendChild(li);
        li.addEventListener("click", function () {
          gameID = game;
          console.log('the second player choosed the game');
        });
      });
      break;
    // initiated be the client

    case "newGame":
      gameID = data.gameID;
      newGame.disabled = true;
      join.disabled = true;
      console.log(gameID, data);
      console.log('new game was created successfully');
      break;
    // initiated be the client

    case "joined":
      document.querySelector(".board").style.display = "grid";
      mark = data.mark;
      console.log(data);

      if (mark === "x") {
        board.classList.add("cross");
      } else {
        board.classList.add("circle");
      }

      break;

    case "updateBoard":
      cells.forEach(function (cell) {
        // clear the board
        if (cell.classList.contains("cross")) {
          cell.classList.remove("cross");
        } else cell.classList.contains("circle");

        cell.classList.remove("circle");
      });

      for (var i = 0; i < 9; i++) {
        if (data.board[i] === "x") {
          cells[i].classList.add("cross");
        } else if (data.board[i] === "o") {
          cells[i].classList.add("circle");
        }
      } // if player`s turm - makemove()


      if (data.currentTurn) makeMove();
      break;

    case "winner":
      winningMessage.innerHTML = "CONGRATS! <br> ".concat(data.winner, " Win! \n                                <img src=\"./img/happy.png\"></img>  \n                                <button id=\"restartButton\" onclick=\"handleRestartGame()\">Restart</button>");
      winningMessage.classList.add("show");
      break;

    case "gameDraw":
      winningMessage.innerHTML = "Game Over! <br> Maybe next time... \n                                <img src=\"./img/sad.png\"></img> \n                                <button id=\"restartButton\" onclick=\"handleRestartGame()\">Restart</button>";
      winningMessage.classList.add("show");
      break;
  }
}

; // nitiated be the client

newGame.addEventListener('click', function () {
  socket.send(JSON.stringify({
    'tag': 'newGame',
    'clientID': clientID
  }));
});

function makeMove() {
  // if the cell is empty, the player can makeMove
  try {
    cells.forEach(function (cell) {
      if (!cell.classList.contains('cross') && !cell.classList.contains('circle')) {
        cell.addEventListener('click', cellClicked);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

;

function cellClicked() {
  // const currentClass = currentTurn ? 'cross' : 'circle';
  // placeMark(cell, currentClass); 
  try {
    var symbol;

    if (mark === 'x') {
      symbol = 'cross';
    } else symbol = 'circle'; // updating the board to the server 


    var _board = []; // const cell = document.querySelector('.cell');

    for (var i = 0; i < 9; i++) {
      if (cells[i].classList.contains('circle')) {
        _board[i] = 'o';
        console.log(_board[i]);
      } else if (cells[i].classList.contains('cross')) {
        _board[i] = 'x';
        console.log(_board[i]);
      } else {
        _board[i] = '';
      }
    } // currentTurn = false;
    // prevent 2 moves at once


    cells.forEach(function (cell) {
      cell.removeEventListener('click', cellClicked);
    });
    socket.send(JSON.stringify({
      'tag': 'moveMade',
      'board': _board,
      'clientID': clientID,
      'gameID': gameID
    }));
    makeMove();
  } catch (error) {
    console.error(error);
  }

  console.log(cellClicked());
}

; // function placeMark(cell, currentClass) {
//   cell.classList.add(currentClass);
// };