var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
var gameStatistic1 = {
    goals: 1,
    shots: 2,
    shots_on_target: 0,
    possesion: 0,
    passes: 0,
    fouls: 0,
    yellow_cards: 0,
    red_cards: 0,
    offsides: 0,
    corners: 0
};
var gameStatistic2 = {
    goals: 0,
    shots: 2,
    shots_on_target: 0,
    possesion: 0,
    passes: 0,
    fouls: 0,
    yellow_cards: 0,
    red_cards: 0,
    offsides: 0,
    corners: 0
};
var team1 = {
    name: 'Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png',
    id: '1234',
    stat: gameStatistic1
};
var team2 = {
    name: 'Machester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
    id: '2356',
    stat: gameStatistic2
};
var gamesPlay = [
    {
        TeamA: team1,
        TeamB: team2
    },
];
app.get('/api/user1', function (req, res) {
    try {
        console.log(gamesPlay[0]);
        res.send({ play: gamesPlay[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/user1', function (req, res) {
    try {
        var edit = req.body;
        console.log(edit);
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
//@ts-ignore: cannot find module 'axios'
