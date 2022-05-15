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
    teamA: Team;
    teamB: Team;
}

interface Team{
    name: string;
    logo: HTMLImageElement;
    id: string; 
    stat: GameStats;
}

let gamePlay: Array<Game> = [
    { TeamA: "ManUnd", },
    { TeamB: "Barcelona"},
  ];
  