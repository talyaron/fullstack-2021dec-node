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
	 console.log(teams)
	 renderTopNav(teams)
	} catch (error) {
		console.error(error);
	}
	handleGetTransfers()
	getScore()
	getAllArticales()
}
function renderTopNav(teams:team){
	console.log(teams)
let team= teams[0]
let html="";
html+=`<div id="${team.name}">
<img src="${team.symbol}" class="teamIcon">
<a href='https://www.maccabi-tlv.co.il/' class="url"><button>${team.name} official website</button></a>
<a href='index.html'>
<h1>Sportil</h1>
</a>
</div>`
const topNav= document.querySelector('#topNav')
topNav.innerHTML=html
topNav.style.backgroundColor=`${team.backgroundColor}`
}

async function handleGetTransfers() {
	//@ts-ignore
	const { data } = await axios.get('/MTA/get-transfers');
	const { transfers } = data;
	console.log(transfers)
	if (!Array.isArray(transfers)) throw new Error('transfers should be an array ant it is not');
	renderTransfer(transfers);
}

function renderTransfer(transfers){
	const teamId = getTeamId();
console.log(transfers)
	let html=""
	transfers.forEach((transfer) =>{
	html+=
	`<div class="transfer${teamId}">
    <div class="box2">
	<a href="${transfer.url}">
    <img src="${transfer.photo}" class="photo">
	</a>
    <p>${transfer.headline}</p>
    <h4>${transfer.text}</h4>   
    </div>`
    })
	let transferBar= document.querySelector('#transferBar')
	transferBar.innerHTML=html
}

async function getScore() {
	//@ts-ignore
	const { data } = await axios.get('/MTA/get-score');
	const { score } = data;
	console.log(score)
	if (!Array.isArray(score)) throw new Error('score should be an array ant it is not');
	renderscore(score);
}
function renderscore(scores){
	const teamId = getTeamId();
	let score= scores[0]
	console.log(score)
	let html=""
	html+=
	`<div class="score${teamId}">
	<div class="fTeam">
	<img src="${score.fTeamSymbol}" class="fSymbol">
	<p>${score.fTeamScore}</p>
	</div>
	<p>-</p>
	<div class="sTeam">
	<p>${score.sTeamScore}</p>
	<img src="${score.sTeamSymbol}" class="sSymbol">
	</div>
	</div>`
	let bar= document.querySelector('#scoreBar')
	bar.innerHTML=html
}

async function getAllArticales() {
	//@ts-ignore
	const { data } = await axios.get('/MTA/get-articles');
	const { articles } = data;
	console.log(articles)
	if (!Array.isArray(articles)) throw new Error('articles should be an array ant it is not');
	renderarticle(articles);
}

function renderarticle(articles){
	const teamId = getTeamId();
	let html=""
	articles.forEach((article) =>{
	html+=
	`<div class="article${teamId}">
    <div class="box2">
	<a href="${article.url}">
    <img src="${article.photo}" class="photo">
	</a>
    <p>${article.headline}</p>
    <h4>${article.text}</h4>   
    </div>`
    })
	let articleBar= document.querySelector('#articleBar')
	articleBar.innerHTML=html
}
