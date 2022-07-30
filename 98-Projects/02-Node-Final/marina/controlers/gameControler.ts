import uid from "../helpers";

interface Game {
  cards: Array<Card>;
  players: Array<Player>;
}
interface Player {
  name: string;
  password: any;
  totalRounds: number;
  totalFlip: number;
  timeStatist: number;
  playerID: string;
}
interface Card {
  url: string;
  cardID: number;
}

const game = {
  cards: [
    {
      url: "./img/1.jpg",
      cardID: 1,
    },
    {
      url: "./img/2.jpg",
      cardID: 2,
    },
    {
      url: "./img/3.jpg",
      cardID: 3,
    },
    {
      url: "./img/4.jpg",
      cardID: 4,
    },
    {
      url: "./img/5.jpg",
      cardID: 5,
    },
    {
      url: "./img/6.jpg",
      cardID: 6,
    },
    {
      url: "./img/7.jpg",
      cardID: 7,
    },
    {
      url: "./img/8.jpg",
      cardID: 8,
    },
  ],
  players: [
    {
      name: "Ryu",
      password: "123",
      totalFlip: 0,
      timeStatist: 0,
      playerID: uid(),
    },
  ],
};

export const getDeck = (req, res) => {
  try {
    const pairedCardArray = [];
    shuffleCards(game.cards);

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < game.cards.length; j++) {
        pairedCardArray.push(game.cards[j]);
      }
    }
    const players = game.players;
    const lastLoggedInPlayer = game.players[game.players.length - 1];
    // console.log("this is the last logged in player from getDeck: ", lastLoggedInPlayer);
    res.status(200).send({ pairedCardArray, players, lastLoggedInPlayer });
    // console.log("pairedArray is", pairedCardArray.length);
    // console.log(pairedCardArray, players, "lastLoggedInPlayer from getDeck is", lastLoggedInPlayer);
  } catch (error) {
    res.send({ error: error.message });
  }
};


export const updateFlips = (req, res) => {
  try {
    const { totalFlip } = req.body;
    let lastLoggedInPlayer = game.players[game.players.length - 1];
    // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
    lastLoggedInPlayer.totalFlip = totalFlip;
    // console.log(lastLoggedInPlayer);
    // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
    res.send(lastLoggedInPlayer);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const updateTime = (req, res) => {
  try {
    const { timeStatist } = req.body;
    let lastLoggedInPlayer = game.players[game.players.length - 1];
    // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
    lastLoggedInPlayer.timeStatist = timeStatist;
    // console.log(lastLoggedInPlayer);
    // console.log("this is lastLoggedInPlayer from update: ", lastLoggedInPlayer);
    res.send(lastLoggedInPlayer);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const handleRegester = (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name) throw new Error("name is required");
    if (!password) throw new Error("password is required");

    const player = {
      name,
      password,
      totalFlip: 0,
      timeStatist: 0,
      playerID: uid(),
    };
    game.players.push(player);

    res.send(game.players);
    // console.log(req.body);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const handleLogin = (req, res) => {
  try {
    const name = req.query.name;
    const password = req.query.password;

    if (!name) throw new Error("name is required");
    if (!password) throw new Error("name is required");

    if (name && password) {
      console.log(name, password);
      const filteredPlayers = game.players.filter(
        (player) => player.name === name && player.password === password
      );
      // console.log(`the name is ${name} and the password  ${password}`);
      res.send({ filteredPlayers });
      res.send(true);
    } else {
      res.send(false);
    }
    // console.log(req.query);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const checkMatch = (req, res) => {
  try {
    const { card1, card2 } = req.query;
    // console.log(req.query);
    // console.log(card1);
    // console.log(card2);
    if (card1 && card2) {
      // console.log(`the fist number is ${card1} and the second  ${card2}`);
      if (card1 === card2) {
        res.send(true);
      } else {
        res.send(false);
      }
    }
    
  } catch (error) {
    res.send({ error: error.message });
  } 
};

export const handleSelectPlayer = (req, res) => {
  try {
    const { playerID } = req.body;
    const player = game.players;
    const index = player.findIndex((user) => user.playerID === playerID);

    if (index >= 0) {
      player[index].playerID === playerID;
      res.status(200).send({ player, index });
    } else {
      throw new Error(`Didnt find any player with id ${playerID}`);
    }
    // console.log("this is handleSelectPlayer from getByID: ", index, player);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const showBestTime = (req, res) => {
  try {    
    let minTime = Math.min(...game.players.map((player) => player.timeStatist));
    // console.log("minTime:", minTime);   
    res.send({minTime})
  } catch (error) {
    res.send({ error: error.message });
  }
};

function shuffleCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
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