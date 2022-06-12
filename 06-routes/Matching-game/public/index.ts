let axios;

const state = {
  timeRemaining: null,
  flippedSameID: [],
  flippedID: [],
  flipped: 0,
  totalFlipsStatist: 0,
  clickNumber: 0,
  totalTime: 10,
  matched: 0,
};

const newLoadGame = async function loadgame() {
  const { cards, players } = await getDeck();
  renderPlayer(players);
  renderDeck(cards);
};

async function getDeck() {
  try {
    const { data } = await axios.post("/get-deck");
    const { players, cards } = data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function handleRegister(e) {
  try {
    console.dir(e.target)

    e.preventDefault();
    const name = e.target.elements.name.value;
    console.log(e);
    console.log(name);
    const { data } = await axios.post("/player-add", { name });
    console.log(data);
    renderPlayer(name);
    window.location.href = "./game.html";
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}

function renderPlayer(players) {
  const root = document.querySelector("#root");
  let html = "";

  players.forEach((player) => {
    html += `
       <div class="statistics">
        <p class="statistics__title" id="game-title">Game Statistics:</p>
        <div class="statistics__info-player">
            <p>Player: <span style="color: rgb(163, 38, 24); font-weight: bold;">${player.name}</span></p>
        </div>
        
    </div>
        `;
  });

  root.innerHTML = html;
}

function renderDeck(cards) {
  const root = document.querySelector("#root");
  let html = "";

  cards.forEach((card) => {
    html += `
        <div class="container__card" onclick="handleFlipCard(event)">
              <img class="container__card__card-back container__card__card-face" id="${card.cardId}" src="./img/back.jpg">       
              <img class="container__card__card-front container__card__card-face" id="${card.cardId}" src="${card.url}">           
        </div>
        `;
  });

  root.innerHTML = html;
}

// SOUNDS =====================================================================================

function gameOverSound() {
  const gameOver: any = document.querySelector("#gameOver");
  gameOver.play();
}

function startMusic() {
  const bgMusic: any = document.querySelector("#creepy");
  bgMusic.play();
  bgMusic.volume = 0.4;
  bgMusic.loop = true;
}

function stopMusic() {
  const bgMusic: any = document.querySelector("#creepy");
  bgMusic.pause();
}

function flipMusic() {
  const flip: any = document.querySelector("#flip");
  flip.play();
}

function matchSound() {
  const match: any = document.querySelector("#match");
  match.play();
}

// START / RESET / GAME OVER / RESTART GAME ===============================================================

function resetAll() {
  state.totalFlipsStatist = 0;
  state.clickNumber = 0;
  state.flipped = 0;
  state.matched = 0;
  stopMusic();
  newLoadGame();
}

const handleStartGame = () => {
  const winningMessage: HTMLElement = document.querySelector("#winningMessage");
  state.totalTime = 10;
  resetAll();
  startMusic();
  handleRegister(event);

  state.timeRemaining = setInterval(() => {
    let timer: any = document.querySelector("#time-remaining");
    state.totalTime--;
    timer.innerText = `${state.totalTime}`;

    if (state.totalTime === 0) {
      clearInterval(state.timeRemaining);
      gameOver();
    }
  }, 1000);

  winningMessage.classList.remove("show");
};

const gameOver = function gameOver() {
  gameOverSound();
  stopMusic();
  hideCards();
  state.totalFlipsStatist = 0;
  state.totalTime = 0;
  // winStateChack();
  drawMessage();
};

function handleRestartGame() {
  const winningMessage: HTMLElement = document.querySelector("#winningMessage");
  winningMessage.classList.remove("show");
  handleStartGame();
}

// FLIPPING =============================================================================================

function handleFlipCard(e) {
  // const card: any = document.querySelector(".container__card__card-front");
  const ticker: any = document.querySelector("#flips");
  let cardOneId = e.target.id;
  let cardTowId = e.target.id;
  // let cardOneId = e.target.currentSrc;
  // let cardTowId = e.target.currentSrc;
  flipMusic();
  state.totalFlipsStatist++;
  ticker.innerText = state.totalFlipsStatist;
  // console.log(state.totalFlipsStatist);
  const element = e.currentTarget;

   

  if (state.clickNumber <= 2) {
    if (element.style.transform === "rotateY(180deg)") {

      setTimeout(() => {

        element.style.transform = "rotateY(0deg)";

      }, 1000);
      
      // checkFlipped(state.flippedID, state.flippedSameID);
    } else {

      element.style.transform = "rotateY(180deg)";
 
      // checkFlipped(state.flippedID, state.flippedSameID);
    }
    
  } else {  
    // return card
    state.clickNumber = 0;
  }

  state.flipped++;

  if (cardOneId === cardTowId) {
    cardOneId.hidden = true;
    cardTowId.hidden = true;
    state.flippedSameID = [];
    state.matched++;
  }

  if (state.flippedSameID === 8) {
    victory();
  }

  // console.dir(card);
  console.dir(e.target.id);
}

// REMOVING ================================================================================

// VICTORY ========================================================

const victory = function victory() {
  const victory: any = document.querySelector("#victory");
  const bgMusic: any = document.querySelector("#creepy");
  victory.play();
  bgMusic.pause();
  hideCards();
  // winStateChack();
  winMessage();
};

// HIDE / WIN CHACK / WIN MESSAGE / =========================================

function hideCards() {
  const deck = document.querySelector(".container");

  while (deck.hasChildNodes()) {
    deck.removeChild(deck.firstChild);
  }
}

function winMessage() {
  const winningMessage: HTMLElement = document.querySelector("#winningMessage");
  document.querySelector<HTMLElement>(".title-game").style.display = "none";

  winningMessage.innerHTML = `CONGRATS! <br> You Win!
                                <img src="../img/queen.png"></img>
                                <button id="restartButton" onclick="handleRestartGame()">Restart</button>`;

  winningMessage.classList.add("show");
}

function drawMessage() {
  const winningMessage: HTMLElement = document.querySelector("#winningMessage");
  document.querySelector<HTMLElement>(".title-game").style.display = "none";

  winningMessage.innerHTML = `Game Over! <br> Maybe next time...
                                <img src="../img/joker.png"></img>
                                <button id="restartButton" onclick="handleRestartGame()">Restart</button>`;

  winningMessage.classList.add("show");
}

function getRootElement() {
  const rootHTML = <HTMLElement>document.querySelector(".root");
  return rootHTML;
}

function log(log) {
  // console.log(log)
  console.dir(log, "yoooohoooo");
}
