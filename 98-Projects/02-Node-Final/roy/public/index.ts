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
		html += `<div class="${team.name}" id="${team.teamId}" onclick="goToTeamPage()>
        <h4 class="">${team.name}</h4>
        <img src="${team.symbol}" class="teamIcon">
        </div>`
       // html.style.backgroundColor= `${team.backgroundColor}`
    })
    const root= document.querySelector('#root');
    root.innerHTML=html;
}