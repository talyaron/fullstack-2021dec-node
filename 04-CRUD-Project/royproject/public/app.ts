

function handleEditing(){
  chooseTeam()
  
}


function chooseTeam(){
    const fTeam= document.querySelector('#fTeamSelect')
    fTeam.innerHTML=`<select  onchange="selectedfOption(event)"  name="team" id="team">
    <option value=""></option>
    <option value="MTA">MTA</option>
    <option value="MHA">MHA</option>
    <option value="HBS">HBS</option>
    <option value="MNT">MNT</option>
    <option value="HTA">HTA</option>
    <option value="BNS">BNS</option>
  </select>`

  const sTeam= document.querySelector('#sTeamSelect')
  sTeam.innerHTML=`<select onchange="selectedsOption(event)" name="team" id="team">
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
  event.preventDefault()
  let selectedOption= event.target.value
  handleGetfteam(selectedOption)
}


function handleGetfteam(selectedOption) {  
if(selectedOption==='MTA'){
  try {
    axios.get('/api/MTA')
      .then(({ data }) => {
       const { team, error } = data;
      renderDetailsf(team)
        if (error) throw new Error(error);
       ;
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
if(selectedOption==='MHA'){
  try {
    axios.get('/api/MHA')
      .then(({ data }) => {
        const { team, error } = data;
       renderDetailsf(team)
        if (error) throw new Error(error);
       ;
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
if(selectedOption==='HBS'){
  try {
    axios.get('/api/HBS')
      .then(({ data }) => {
       const { team, error } = data;
       renderDetailsf(team)
        if (error) throw new Error(error);
       ;
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
if(selectedOption==='MNT'){
  try {
    axios.get('/api/MNT')
      .then(({ data }) => {
        const { team, error } = data;
       renderDetailsf(team)
        if (error) throw new Error(error);
       ;
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
if(selectedOption==='HTA'){
  try {
    axios.get('/api/HTA')
      .then(({ data }) => {
       const { team, error } = data;
       renderDetailsf(team)
        if (error) throw new Error(error);
       ;
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
if(selectedOption==='BNS'){
  try {
    axios.get('/api/BNS')
      .then(({ data }) => {
        const { team, error } = data;
       renderDetailsf(team)
        if (error) throw new Error(error);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
}

function selectedsOption(event){
  let selectedOption= event.target.value
  handleGetsteam(selectedOption)
}


function handleGetsteam(selectedOption) {  
  if(selectedOption==='MTA'){
    try {
      axios.get('/api/MTA')
        .then(({ data }) => {
         const { team, error } = data;
        renderDetailss(team)
          if (error) throw new Error(error);
         ;
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
  if(selectedOption==='MHA'){
    try {
      axios.get('/api/MHA')
        .then(({ data }) => {
          const { team, error } = data;
         renderDetailss(team)
          if (error) throw new Error(error);
         ;
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
  if(selectedOption==='HBS'){
    try {
      axios.get('/api/HBS')
        .then(({ data }) => {
         const { team, error } = data;
         renderDetailss(team)
          if (error) throw new Error(error);
         ;
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
  if(selectedOption==='MNT'){
    try {
      axios.get('/api/MNT')
        .then(({ data }) => {
          const { team, error } = data;
         renderDetailss(team)
          if (error) throw new Error(error);
         ;
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
  if(selectedOption==='HTA'){
    try {
      axios.get('/api/HTA')
        .then(({ data }) => {
         const { team, error } = data;
         renderDetailss(team)
          if (error) throw new Error(error);
         ;
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
  if(selectedOption==='BNS'){
    try {
      axios.get('/api/BNS')
        .then(({ data }) => {
          const { team, error } = data;
         renderDetailss(team)
          if (error) throw new Error(error);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
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

function fteamstat(event){
  event.preventDefault()
  const elements = event.target.elements;
  const result = {
    fTeamShots: elements.fTeamShots.value,
    fTeamshotsontarget: elements.fTeamshotsontarget.value,
    fTeamPossesion: elements.fTeamPossesion.value,
    fTeamYellowCards: elements.fTeamYellowCards.value,
    fTeamredCards: elements.fTeamredCards.value,
    fTeamcorners: elements.fTeamcorners.value,
  };
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name && elements[i].value) {
     result[elements[i].name] = elements[i].value;
    }
  }
 
  console.log(result)
  return result
}


function steamstat(event){
  event.preventDefault()
  const elements = event.target.elements;
  const result = {
   sTeamShots: elements.sTeamShots.value,
   sTeamshotsontarget: elements.sTeamshotsontarget.value,
   sTeamPossesion: elements.sTeamPossesion.value,
   sTeamYellowCards: elements.sTeamYellowCards.value,
   sTeamredCards: elements.sTeamredCards.value,
   sTeamcorners: elements.sTeamcorners.value,
  };
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name && elements[i].value) {
     result[elements[i].name] = elements[i].value;
    }
  }
  console.log(result)
  return result
}