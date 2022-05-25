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
    logo: string;
    id: string;
    stat: GameStats;
}

let gameStatistic1: GameStats = {
    goals: 1,
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

let team1: Team = {
    name: 'Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png',
    id: '1234',
    stat: gameStatistic1,
}
let team2: Team = {
    name: 'Machester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
    id: '2356',
    stat: gameStatistic2,
}

let gamesPlay: Array<Game> = [
    {
        TeamA: team1,
        TeamB: team2
    },

]


app.get('/api/user1', (req, res) => {
    try {
        console.log(gamesPlay[0]);
        res.send({ play: gamesPlay[0] });

    } catch (error) {
        res.send({ error: error.message })
    }
});

app.post('/api/user1', (req,res)=>{
    try {
        let edit= req.body
        console.log(edit)
        res.send({ok:true})
    } catch (error) {
        console.error(error)
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
    //@ts-ignore: cannot find module 'axios'

