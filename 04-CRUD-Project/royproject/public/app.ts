
function handleEditing(){
  chooseTeam()
  
}

function chooseTeam(){
    const fTeam= document.querySelector('#fTeamSelect')
    fTeam.innerHTML=`<select  onblur="selectedfOption(event)"  name="team" id="team">
    <option value=""></option>
    <option value="MTA">MTA</option>
    <option value="MHA">MHA</option>
    <option value="HBS">HBS</option>
    <option value="MNT">MNT</option>
    <option value="HTA">HTA</option>
    <option value="BNS">BNS</option>
  </select>`

  const sTeam= document.querySelector('#sTeamSelect')
  sTeam.innerHTML=`<select onblur="selectedsOption(event)" name="team" id="team">
  <option value=""></option>
  <option value="MTA">MTA</option>
  <option value="MHA">MHA</option>
  <option value="HBS">HBS</option>
  <option value="MNT">MNT</option>
  <option value="HTA">HTA</option>
  <option value="BNS">BNS</option>
</select>`
}

function selectedfOption(event){
  try {
    event.preventDefault()
    let selectedOption= event.target.value
    fgetAllTeams(selectedOption)
  } catch (error) { 
  }
}

function fgetAllTeams(selectedOption){
  try {
    // @ts-ignore
    axios.get("/api/get-teams").then(({data}) => {
    const { teams, error } = data;
    console.log(teams)
    const seletedindex= teams.findIndex(team=>team.teamName===selectedOption)
    console.log(seletedindex)
     let selectedTeam=teams[seletedindex]
     console.dir(selectedTeam)
     renderDetailsf(selectedTeam)
    if (error) throw new Error(error);
    })
  }
   catch (err: any) {
    console.error(err);
  }
}

function selectedsOption(event){
  let selectedOption= event.target.value
  event.preventDefault()
  sgetAllTeams(selectedOption)
}

function sgetAllTeams(selectedOption){
  try {
    // @ts-ignore
    axios.get("/api/get-teams").then(({data}) => {
    const { teams, error } = data;
    console.log(teams)
    const seletedindex= teams.findIndex(team=>team.teamName===selectedOption)
    console.log(seletedindex)
     let selectedTeam=teams[seletedindex]
     console.dir(selectedTeam)
     renderDetailss(selectedTeam)
     renderSTeam(selectedTeam)
    if (error) throw new Error(error);
    })
  } 
   catch (err: any) {
    console.error(err);
  }  
}

function renderDetailsf(teams:team) {
  const name:HTMLParagraphElement = document.querySelector("#fteamName")
  name.innerText=`${teams.teamName}`
  const image: HTMLImageElement = document.querySelector("#fTeam");
  image.src = `${teams.teamimg}`;
}

function renderDetailss(teams:team) {
  const name:HTMLParagraphElement = document.querySelector("#steamName")
  name.innerText=`${teams.teamName}`
  const image: HTMLImageElement = document.querySelector("#sTeam");
  image.src = `${teams.teamimg}`;
}

function getFStat() {
  try {
    // @ts-ignore
    axios.get("/api/get-stat").then(({data}) => {

    const { fstat, error } = data;
    if (error) throw new Error(error);

    console.dir(fstat)
  })
}
     catch (err: any) {
    console.error(err);
  }
}

function fTeamStat(event){
  event.preventDefault()
const elements = event.target.elements;
let fTeamShots= elements.fTeamShots.value;
let fTeamshotsontarget= elements.fTeamshotsontarget.value;
let fTeamPossesion= elements.fTeamPossesion.value;
let fTeamYellowCards= elements.fTeamYellowCards.value;
let fTeamredCards= elements.fTeamredCards.value;
let fTeamcorners= elements.fTeamcorners.value;
getFStat()
  // @ts-ignore
axios.post('/api/add-fresult', { fTeamShots, fTeamshotsontarget, fTeamPossesion, fTeamYellowCards, fTeamredCards, fTeamcorners }).then(({data}) => {
const { fResult, error } = data;
console.dir(fResult)
//clientLoad(fResult)
if (error) throw new Error(error);
})
}
function getsStat() {
  try {
    // @ts-ignore
    axios.get("/api/get-sstat").then(({data}) => {
    const { sstat, error } = data;
    if (error) throw new Error(error);
  })
}
     catch (err: any) {
    console.error(err);
  }
}

function sTeamStat(event){
  event.preventDefault()
const elements = event.target.elements;
let sTeamShots= elements.sTeamShots.value;
let sTeamshotsontarget= elements.sTeamshotsontarget.value;
let sTeamPossesion= elements.sTeamPossesion.value;
let sTeamYellowCards= elements.sTeamYellowCards.value;
let sTeamredCards= elements.sTeamredCards.value;
let sTeamcorners= elements.sTeamcorners.value;
getsStat()
  // @ts-ignore
axios.post('/api/add-sresult', { sTeamShots, sTeamshotsontarget, sTeamPossesion, sTeamYellowCards, sTeamredCards, sTeamcorners }).then(({data}) => {
const { sstat, error } = data;
clientLoad( sstat)
if (error) throw new Error(error);
})
}

function clientLoad( sstat){
    let result= sstat[0]
    const sTeamStat: HTMLDivElement = document.querySelectorAll('.fTeamClientstats')
    console.log(sTeamStat)
     sTeamStat.innerText = `<div id=sTeamShots>${result.sTeamShots}</div>
     <div id=sTeamshotsontarget>${result.sTeamshotsontarget}</div>
     <div id=sTeamPossesion>${result.sTeamPossesion}</div>
     <div id=sTeamYellowCards>${result.sTeamYellowCards}</div>
     <div id=sTeamredCardshots>${result.sTeamredCards}</div>
     <div id=sTeamcorners>${result.sTeamcorners}</div>`
     renderclient(sTeamStat.innerText)
}
function renderclient(stat){
  const sTeamStat: HTMLDivElement = document.querySelectorAll('.fTeamClientstats')
  sTeamStat.innerText= stat
 
}

function renderSTeam(teams){
  const name:HTMLParagraphElement = document.querySelectorAll("#fteamName")
  name.innerText=`${teams.teamName}`
  console.log(name)
  const image: HTMLImageElement = document.querySelectorAll("#fTeam");
  image.src = `${teams.teamimg}`;
}