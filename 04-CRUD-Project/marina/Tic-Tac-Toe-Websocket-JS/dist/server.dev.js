"use strict";

// 4. creating the server.
// 5.  creating connection between http and websocket
// 6.  saving contants (connection, clientID) in the global data structure 
// 8.  res to client (connection)
// 16. defining onMessage function recieving request from client
// 21.  we gonna send the list of the available games to all clients, that currently connected to the server.
// 23.  creating the second player object and pushing it onto array of players
// 24.  --initiated by server. after the the second player is joined to game, both players should get the bord grid
// 26.  -- initiated by the server.  to start the first move
// 30. -- initiated by the client-- moveMade()
var http = require('http').createServer().listen(4006, console.log('websocket listening on port 4006'));

var server = require('websocket').server; // requiring the packege 'websocket' with class of 'server'


var socket = new server({
  'httpServer': http
}); // creatong a 'socket' which will pass an Obj 'httpServer'

var games = {};
var player = {};
var clients = {};
var winCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
socket.on('request', function (req) {
  var connection = req.accept(null, req.origin); // 'null' is only accept the req, 'req.origin' - whatever this req is - accept it

  var clientID = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
  clients[clientID] = {
    'connection': connection
  };
  connection.send(JSON.stringify({
    "tag": 'connected',
    "clientID": clientID
  }));
  sendAvailableGame();
  connection.on('message', onMessage);
});

function sendAvailableGame() {
  var gamesList = [];

  for (var game in games) {
    if (games[game].players.length < 2) {
      gamesList.push(game);
    }
  }

  for (var client in clients) {
    clients[client].connection.send(JSON.stringify({
      'tag': 'gamesList',
      'list': gamesList
    }));
  }
}

;

function onMessage(message) {
  var data = JSON.parse(message.utf8Data);

  switch (data.tag) {
    // as a client request, by creating a new game we need information:
    // -- gameID
    // -- list of players (clientID)
    // -- mark of the player 
    // -- who`s turn 
    // -- game board
    case 'newGame':
      var gameID = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
      var board = ['', '', '', '', '', '', '', '', ''];
      player = {
        // the mesage comes from the client with only information about clientID => we use 'data.clientID'
        'clientID': data.clientID,
        'mark': 'x',
        'currentTurn': true
      };
      var players = Array(player);
      games[gameID] = {
        'board': board,
        'players': players
      };
      console.log(games[gameID]); // [data.clientID] <- message came from the client

      clients[data.clientID].connection.send(JSON.stringify({
        'tag': 'newGame',
        'gameID': gameID
      }));
      console.log(clients[data.clientID]);
      sendAvailableGame();
      break;

    case 'join':
      player = {
        'clientID': data.clientID,
        'mark': 'o',
        'currentTurn': false
      };
      games[data.gameID].players.push(player);
      console.log(player); // console.log(games[data.gameID]);

      sendAvailableGame(); // --initiated by server. after the the second player is joined to game, players should get the bord grid

      games[data.gameID].players.forEach(function (player) {
        clients[player.clientID].connection.send(JSON.stringify({
          'tag': 'joined',
          'gameID': data.gameID,
          'mark': player.mark
        }));
      });
      updateBoard(data.gameID);
      break;

    case 'moveMade':
      try {
        games[data.gameID].board = data.board;
        console.log(data.board);
        console.log(games[data.gameID].board);
      } catch (error) {
        console.log(error);
      }

      var winner = winState(data.gameID);
      var draw = drawState(data.gameID);

      if (winner) {
        games[data.gameID].players.forEach(function (player) {
          clients[player.clientID].connection.send(JSON.stringify({
            'tag': 'winner',
            'winner': player.mark
          }));
          console.log(clients[player.clientID]);
        });
      } else if (draw) {
        games[data.gameID].players.forEach(function (player) {
          clients[player.clientID].connection.send(JSON.stringify({
            'tag': 'gameDraw'
          }));
          console.log(clients[player.clientID]);
        });
      } else {
        games[data.gameID].players.forEach(function (player) {
          player.currentTurn = !player.currentTurn;
        });
        console.log(player.currentTurn);
      }

      updateBoard(data.gameID);
      break;
  }
}

function updateBoard(gameID) {
  games[gameID].players.forEach(function (player) {
    clients[player.clientID].connection.send(JSON.stringify({
      'tag': 'updateBoard',
      'currentTurn': player.currentTurn,
      'board': games[gameID].board
    }));
  });
  console.log(games[gameID].players, player.currentTurn, games[gameID].board);
}

;

function winState(gameID) {
  return winCombination.every(function (row) {
    return row.some(function (cell) {
      return games[gameID].board[cell] === 'x';
    }) || row.some(function (cell) {
      return games[gameID].board[cell] === 'o';
    });
  });
}

;

function drawState(gameID) {
  return winCombination.every(function (row) {
    return row.some(function (cell) {
      return games[gameID].board[cell] === 'x';
    }) && row.some(function (cell) {
      return games[gameID].board[cell] === 'o';
    });
  });
}

;