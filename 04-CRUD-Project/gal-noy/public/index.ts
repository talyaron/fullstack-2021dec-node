
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

    const { play, error } = data;
    if (error) throw new Error(error);
    console.log(play);
    build_gameStatistic(play);
  } catch (error) {
    console.error(error);
  }
}

handleGetGame();

async function hundleEditGame(event){
  event.preventDefault()
  const editScreen= {}
  console.log(event)
  for(let i of event.target){
    console.log(i.type, i.name, i.value)
    if(i.type != 'submit'){
    if(i.type==='text'){
      editScreen[i.name] = i.value
    }
    else if(i.type==='number'){
      editScreen[i.name] = i.value
    }
  }
}
  console.log(editScreen)
  //  @ts-ignore: cannot find module 'axios'
  const {data} = await axios.post('/api/user1', {editScreen})
  console.log(data)
}



function build_gameStatistic(play) {
  const GameStatsDiv: HTMLDivElement = document.querySelector('.gameStats');
  const top_nav: HTMLDivElement = document.querySelector('.top_nav');

  console.log(play);
  top_nav.innerHTML = `<div class="teamLogo teamLogo__1">
  <img src='${play.TeamA.logo}'>
  <span class="team_name team_name__1">${play.TeamA.name}</span>
</div>

<div class="scoreTeam1">
${play.TeamA.stat.goals}
</div>
<span>-</span>
<div class="scoreTeam2">
${play.TeamB.stat.goals}
</div>
<div class="teamLogo teamLogo__2">
<img src="${play.TeamB.logo}">
  <span class="team_name team_name__2">${play.TeamB.name}</span>
</div>
</div>`
  GameStatsDiv.innerHTML = `<div class="stat_row"><div> <img src="${play.TeamA.logo}"></div><div>GAME STATS</div><div> <img src="${play.TeamB.logo}"></div></div>
  <div class="stat_row"><div>${play.TeamA.stat.shots}</div><div>SHOTS</div><div>${play.TeamB.stat.shots}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.shots_on_target}</div><div>SHOTS ON TARGET</div><div>${play.TeamB.stat.shots_on_target}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.possesion}</div><div>POSSESION</div><div>${play.TeamB.stat.possesion}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.passes}</div><div>PASSES</div><div>${play.TeamB.stat.passes}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.fouls}</div><div>FOULS</div><div>${play.TeamB.stat.fouls}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.yellow_cards}</div><div>YELLOW CARDS</div><div>${play.TeamB.stat.yellow_cards}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.red_cards}</div><div>RED CARDS</div><div>${play.TeamB.stat.red_cards}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.offsides}</div><div>OFFSIDES</div><div>${play.TeamB.stat.offsides}</div></div>
  <div class="stat_row"><div>${play.TeamA.stat.corners}</div><div>CORNERS</div><div>${play.TeamB.stat.corners}</div></div>`

}


