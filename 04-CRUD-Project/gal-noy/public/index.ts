
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
async function handleGetGame() {
  try {
    console.log("get success")
    //  @ts-ignore: cannot find module 'axios'
    const { data } = await axios.get("/api/user1");
    console.log(data);
    const { play, error } = data;
    if (error) throw new Error(error);
    console.log(play);
    renderLoader();
    console.log("get Team 1 & then get Team 2");
  } catch (error) {
    console.error(error);
  }
}

handleGetGame();


function renderLoader() {
  const loader: HTMLElement = document.querySelector('#loader')
  if (!loader.classList.contains('lds-dual-ring')) {
    loader.classList.add('lds-dual-ring');
    console.log('add')
  } else {
    loader.classList.remove('lds-dual-ring');
    console.log('remove')
  }
}


// function build_gameStatistic() {
//   const GameStatsDiv: HTMLDivElement = document.querySelector('.gameStats');
//   console.log(GameStatsDiv);
//   GameStatsDiv.innerHTML = `<div class="stat_row"><div>${gamesPlay.TeamA.stat.shots}</div><div>SHOTS</div><div>${gamePlay.TeamB.stat.shots}</div></div>`
// }

// build_gameStatistic();
