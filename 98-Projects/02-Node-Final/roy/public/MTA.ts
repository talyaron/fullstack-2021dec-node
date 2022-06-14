interface team{
    name:string,
    teamId:string,
    backgroundColor:string,
    symbol:string,
}

function getTeamId(): string | false {
	try {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const teamId = urlParams.get('Id');
		return teamId;
	} catch (error) {
		console.error(error);
		return false;
	}
}

async function handleDeleteTeam() {
	try {
    const teamId = getTeamId();
		//@ts-ignore
		 const { data } = await axios.delete('/MTA/Team-delete', {
		 	data: { teamId }
		 });
     const {teams} = data;
	 renderTopNav(teams)
	} catch (error) {
		console.error(error);
	}
}
function renderTopNav(teams:team){
let team= teams[0]
let html="";
html+=`<div id="${team.name}">
<img src="${team.symbol}" class="teamIcon">
<a href='https://www.maccabi-tlv.co.il/' class="url"><button>${team.name} official website</button></a>
<h1>Sportil</h1>
</div>`
const topNav= document.querySelector('#topNav')
topNav.innerHTML=html
topNav.style.backgroundColor=`${team.backgroundColor}`
}