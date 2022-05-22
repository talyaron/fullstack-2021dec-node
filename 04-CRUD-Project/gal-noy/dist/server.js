var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
var gameStatistic = {
    goals: 0,
    shots: 0,
    shots_on_target: 0,
    possesion: 0,
    passes: 0,
    fouls: 0,
    yellow_cards: 0,
    red_cards: 0,
    offsides: 0,
    corners: 0
};
var gamePlay = [
    { name: 'ManUnd', id: '12345', stat: gameStatistic },
    { name: 'Barcelona', id: '2324', stat: gameStatistic },
];
app.get('/api/user1', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ play: gamePlay[0] });
        }, 200);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user2', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ play: gamePlay[1] });
        }, 200);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
//@ts-ignore: cannot find module 'axios'
