"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Connected!");
const helpers_1 = __importDefault(require("./helpers"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 4006;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const cards = [
    {
        url: "./img/1.jpg",
        cardId: 1,
    },
    {
        url: "./img/1.jpg",
        cardId: 1,
    },
    {
        url: "./img/2.jpg",
        cardId: 2,
    },
    {
        url: "./img/2.jpg",
        cardId: 2,
    },
    {
        url: "./img/3.jpg",
        cardId: 3,
    },
    {
        url: "./img/3.jpg",
        cardId: 3,
    },
    {
        url: "./img/4.jpg",
        cardId: 4,
    },
    {
        url: "./img/4.jpg",
        cardId: 4,
    },
    {
        url: "./img/5.jpg",
        cardId: 5,
    },
    {
        url: "./img/5.jpg",
        cardId: 5,
    },
    {
        url: "./img/6.jpg",
        cardId: 6,
    },
    {
        url: "./img/6.jpg",
        cardId: 6,
    },
    {
        url: "./img/7.jpg",
        cardId: 7,
    },
    {
        url: "./img/7.jpg",
        cardId: 7,
    },
    {
        url: "./img/8.jpg",
        cardId: 8,
    },
    {
        url: "./img/8.jpg",
        cardId: 8,
    },
];
let players = [
    // playersList: [],
    {
        name: "Mario",
        playerId: helpers_1.default(),
    },
];
app.post("/get-deck", (req, res) => {
    try {
        shuffleCards(cards);
        // res.send(cards);
        res.send({ players, cards });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post("/player-add", (req, res) => {
    try {
        const { name } = req.body;
        if (!name)
            throw new Error('name is required');
        const player = { name, playerId: helpers_1.default() };
        players.push(player);
        res.send(players);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
function shuffleCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
}
app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});
