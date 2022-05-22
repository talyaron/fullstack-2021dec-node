const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.static("public"));

interface GameStats{
    name: string;
    id: string;
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

interface Game{
    TeamA: Team;
    TeamB: Team;
}

interface Team{
    name: string;
    // logo: HTMLImageElement;
    id: string; 
    // stat: GameStats;
}

let gamePlay: Array<Team> = [
    { name: 'ManUnd', id: '12345'},
    { name: 'Barcelona', id: '2324' },
  ];

  app.get('/api/user1', (req, res)=>{
    try {
        setTimeout(()=>{
            res.send({play:gamePlay[0]});
        },200)
       
    } catch (error) {
        res.send({error:error.message})
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
    //@ts-ignore: cannot find module 'axios'

  