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
       // html.style.backgroundColor= `${team.backgroundColor}`
    })
    const root= document.querySelector('#root');
    root.innerHTML=html;
}

