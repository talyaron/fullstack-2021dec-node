"use strict";
exports.__esModule = true;
exports.showBestTime = exports.handleSelectPlayer = exports.checkMatch = exports.handleLogin = exports.handleRegester = exports.updateTime = exports.updateFlips = exports.getDeck = void 0;
var helpers_1 = require("../helpers");
var game = {
    cards: [
        {
            url: "./img/1.jpg",
            cardID: 1
        },
        {
            url: "./img/2.jpg",
            cardID: 2
        },
        {
            url: "./img/3.jpg",
            cardID: 3
        },
        {
            url: "./img/4.jpg",
            cardID: 4
        },
        {
            url: "./img/5.jpg",
            cardID: 5
        },
        {
            url: "./img/6.jpg",
            cardID: 6
        },
        {
            url: "./img/7.jpg",
            cardID: 7
        },
        {
            url: "./img/8.jpg",
            cardID: 8
        },
    ],
    players: [
        {
            name: "Ryu",
            password: "123",
            totalFlip: 0,
            timeStatist: 0,
            playerID: helpers_1["default"]()
        },
    ]
};
exports.getDeck = function (req, res) {
    try {
        var pairedCardArray = [];
        shuffleCards(game.cards);
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < game.cards.length; j++) {
                pairedCardArray.push(game.cards[j]);
            }
        }
        var players = game.players;
        var lastLoggedInPlayer = game.players[game.players.length - 1];
        // console.log("this is the last logged in player from getDeck: ", lastLoggedInPlayer);
        res.status(200).send({ pairedCardArray: pairedCardArray, players: players, lastLoggedInPlayer: lastLoggedInPlayer });
        // console.log("pairedArray is", pairedCardArray.length);
        // console.log(pairedCardArray, players, "lastLoggedInPlayer from getDeck is", lastLoggedInPlayer);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.updateFlips = function (req, res) {
    try {
        var totalFlip = req.body.totalFlip;
        var lastLoggedInPlayer = game.players[game.players.length - 1];
        // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
        lastLoggedInPlayer.totalFlip = totalFlip;
        // console.log(lastLoggedInPlayer);
        // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
        res.send(lastLoggedInPlayer);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.updateTime = function (req, res) {
    try {
        var timeStatist = req.body.timeStatist;
        var lastLoggedInPlayer = game.players[game.players.length - 1];
        // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
        lastLoggedInPlayer.timeStatist = timeStatist;
        // console.log(lastLoggedInPlayer);
        // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
        res.send(lastLoggedInPlayer);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.handleRegester = function (req, res) {
    try {
        var _a = req.body, name = _a.name, password = _a.password;
        if (!name)
            throw new Error("name is required");
        if (!password)
            throw new Error("password is required");
        var player = {
            name: name,
            password: password,
            totalFlip: 0,
            timeStatist: 0,
            playerID: helpers_1["default"]()
        };
        game.players.push(player);
        res.send(game.players);
        // console.log(req.body);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.handleLogin = function (req, res) {
    try {
        var name_1 = req.query.name;
        var password_1 = req.query.password;
        if (!name_1)
            throw new Error("name is required");
        if (!password_1)
            throw new Error("name is required");
        if (name_1 && password_1) {
            console.log(name_1, password_1);
            var filteredPlayers = game.players.filter(function (player) { return player.name === name_1 && player.password === password_1; });
            // console.log(`the name is ${name} and the password  ${password}`);
            res.send({ filteredPlayers: filteredPlayers });
            res.send(true);
        }
        else {
            res.send(false);
        }
        // console.log(req.query);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.checkMatch = function (req, res) {
    try {
        var _a = req.query, card1 = _a.card1, card2 = _a.card2;
        // console.log(req.query);
        // console.log(card1);
        // console.log(card2);
        if (card1 && card2) {
            // console.log(`the fist number is ${card1} and the second  ${card2}`);
            if (card1 === card2) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        }
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.handleSelectPlayer = function (req, res) {
    try {
        var playerID_1 = req.body.playerID;
        var player = game.players;
        var index = player.findIndex(function (user) { return user.playerID === playerID_1; });
        if (index >= 0) {
            player[index].playerID === playerID_1;
            res.status(200).send({ player: player, index: index });
        }
        else {
            throw new Error("Didnt find any player with id " + playerID_1);
        }
        // console.log("this is handleSelectPlayer from getByID: ", index, player);
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
exports.showBestTime = function (req, res) {
    try {
        var minTime = Math.min.apply(Math, game.players.map(function (player) { return player.timeStatist; }));
        // console.log("minTime:", minTime);   
        res.send({ minTime: minTime });
    }
    catch (error) {
        res.send({ error: error.message });
    }
};
function shuffleCards(cards) {
    for (var i = 0; i < cards.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
}
// ================================================================
// function shuffleCards(cards) {
//   return cards.sort(() => 0.5 - Math.random());
// }
// pairID =======================================================
// function createPairID(cardUrls) {
//   let tempPairObj = {};
//   for (let i = 0; i < cardUrls.length; i++) {
//     tempPairObj = { url: cardUrls[i], pairID: uid() }; // when such an Obj is created => it sent to 'createDobleCards(tempPairObj)'
//     createDobleCards(tempPairObj);
//   }
// }
// createPairID(cardUrls);
// function createDobleCards(tempPairObj) {
//   const doubleArray = [];
//   for (let i = 0; i <= 2; i++) {
//     const tempDoubleObj = {
//       url: tempPairObj.url,
//       pairID: tempPairObj.pairID,
//       uniqueID: uid()
//     };
//     doubleArray.push(tempDoubleObj);
//   }
//   console.log(doubleArray);
//   return doubleArray;
// }
// =========================================================
// const cardDesk = doubleCards(cards);
// function doubleCards(cards) {
//   let doubleArray = [];
//   cards.forEach((card) => {
//     const tempObj = { name: card.name, url: card.url, pairID: uid() };
//     const card1: any = Object.assign({}, tempObj);
//     const card2: any = Object.assign({}, tempObj);
//     card1.uniqueID = uid();
//     card2.uniqueID = uid();
//     doubleArray = [...doubleArray, card1, card2];
//   });
//   return doubleArray;
// }
