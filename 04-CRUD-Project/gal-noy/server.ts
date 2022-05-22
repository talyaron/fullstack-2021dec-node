const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static("public"));

interface GameStats {
    goals: number;
    shots: number;
    shots_on_target: number;
    possesion: number;
    passes: number;
    fouls: number;
    yellow_cards: number;
    red_cards: number;
    offsides: number;
    corners: number;
}

interface Game {
    TeamA: Team;
    TeamB: Team;
}

interface Team {
    name: string;
    // logo: HTMLImageElement;
    id: string;
    stat: GameStats;
}

let gameStatistic1: GameStats = {
    goals: 0,
    shots: 2,
    shots_on_target: 0,
    possesion: 0,
    passes: 0,
    fouls: 0,
    yellow_cards: 0,
    red_cards: 0,
    offsides: 0,
    corners: 0,
}
let gameStatistic2: GameStats = {
    goals: 0,
    shots: 34,
    shots_on_target: 0,
    possesion: 0,
    passes: 0,
    fouls: 0,
    yellow_cards: 0,
    red_cards: 0,
    offsides: 0,
    corners: 0,
}

let team1: Team = {
    name: 'Barcelona',
    id: '1234',
    stat: gameStatistic1,
}
let team2: Team = {
    name: 'Machester City',
    id: '2356',
    stat: gameStatistic2,
}
let gamePlay: Game =
{
    TeamA: team1,
    TeamB: team2
};

app.get('/api/user1', (req, res) => {
    try {
        setTimeout(() => {
            res.send({ play: gamePlay[0] });
        }, 200)

    } catch (error) {
        res.send({ error: error.message })
    }
});

app.get('/api/user2', (req, res) => {
    try {
        setTimeout(() => {
            res.send({ play: gamePlay[1] });
        }, 200)

    } catch (error) {
        res.send({ error: error.message })
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
    //@ts-ignore: cannot find module 'axios'

