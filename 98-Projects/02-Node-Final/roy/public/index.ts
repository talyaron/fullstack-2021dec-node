interface team{
    name:string,
    teamId:string,
    backgroundColor:string,
    symbol:string,
}
 async function handleGetTeams() {
	//@ts-ignore
	const { data } = await axios.get('/index/get-teams');
	const { teams } = data;
	if (!Array.isArray(teams)) throw new Error('teams should be an array ant it is not');
	renderTeams(teams);
}
function renderTeams(teamsArr){
    let html = '';
	teamsArr.forEach((team) => {
		html += `<a href='${team.name}.html?Id=${team.teamId}'>
        <div class="${team.name}" id="${team.teamId}">
        <h4>${team.name}</h4>
        <img src="${team.symbol}" class="teamIcon">
        </div>
        </a>`
    })
    const root= document.querySelector('#root');
    root.innerHTML=html;
}
async function update(event){
   await event.preventDefault()
    let choosenTeam= event.target.value
    console.log(choosenTeam)
    let html = '';
    if(choosenTeam===`MTA`){
        html +=`<a href='update.html?Id=abc'>
        <button type="submit">המשך</button>
        </a>`
    }
    if(choosenTeam===`HTA`){ 
        html +=`<a href='updateHTA.html?Id=abcd'>
        <button type="submit">המשך</button>
        </a>`
    }
    let wrapper= document.querySelector('#wrapper')
    wrapper.innerHTML=html
}

