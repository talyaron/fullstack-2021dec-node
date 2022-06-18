interface team{
    name:string,
    teamId:string,
    backgroundColor:string,
    symbol:string,
}
interface transfer{
    headline:string,
    Id:string,
	photo:string,
    url:string,
    text:string,
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
	handleGetTransfers()
	getScore()
	getAllArticales()
	GoToPage()
}
function renderTopNav(teams:team){
	
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
	
	if (!Array.isArray(transfers)) throw new Error('transfers should be an array ant it is not');
	renderTransfer(transfers);
}

function renderTransfer(transfers){
	const teamId = getTeamId();

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
    <button onclick="editTransfer()">ערוך</button> 
    </div>`
    })
	let transferBar= document.querySelector('#transferBar')
	transferBar.innerHTML=html
}

function editTransfer(){
    let html=""
    html+=` <form onsubmit='updateTransfer(event)'>
    <label for='headline'></label>
    <input type='text' name='headline' placeholder='headline' required>
    <label for='headline'>הכנס כותרת</label>
    <input type='text' name='photo' class='photo' placeholder='photo' required>
    <label for='photo'>הכנס קישור לתמונה</label>
    <input type='text' name='url' placeholder='url' required>
    <label for='url'>הכנס קישור לכתבה</label>
    <input type='text' name='text' placeholder='text' required>
    <label for='text'>הכנס כותרת משנה</label>
	<input type='text' name='id' placeholder='text' required>
	<label for='id'>הכנס ID </label>
    <button type='submit'>עדכן</button>     
</form>`
let editTransfer= document.querySelector('.box2')
editTransfer.innerHTML= html
}
 async function updateTransfer(event){
    event.preventDefault()
	let elements= event.target.elements;
	const results: transfer={
	 photo: elements.photo.value,
	 url: elements.url.value,
	 headline: elements.headline.value,
	 text: elements.text.value,
	 Id: elements.id.value
	}
	//@ts-ignore
	const { data } = await axios.patch("/MTA/update-Transfers", { results });
	const transfers = data;
	if (!Array.isArray(transfers)) throw new Error('transfers should be an array ant it is not');
	console.log(transfers)
	reRenderTransfers(transfers)
}
function reRenderTransfers(transfers){
	const teamId = getTeamId();
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
    <button onclick="editTransfer()">ערוך</button> 
    </div>`
    })
	let transferBar= document.querySelector('#transferBar')
	transferBar.innerHTML=html
}

interface score{
    fTeamSymbol:string,
	sTeamSymbol:string,
	fTeamScore:string,
	sTeamScore:string,
}

async function getScore() {
	//@ts-ignore
	const { data } = await axios.get('/MTA/get-score');
	const { score } = data;
	if (!Array.isArray(score)) throw new Error('score should be an array ant it is not');
	renderscore(score);
}
function renderscore(scores){
	const teamId = getTeamId();
	console.log(scores)
	let score=scores[0]
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
	<button onclick="editScore()">ערוך</button
	</div>
	</div>`
	let bar= document.querySelector('#scoreBar')
	bar.innerHTML=html
}
function editScore(){
    let html=""
    html+=` <form onsubmit='updateScore(event)'>
	<label for='fTeamSymbol'></label>
    <input type='text' name='fTeamSymbol' placeholder='fTeamSymbol' required>
    <label for='fTeamSymbol'>הכנס קישור לסמל קבוצת הבית </label>
    <input type='text' name='fTeamScore' class='fTeamScore' placeholder='fTeamScore' required>
    <label for='fTeamScore'>הכנס את תוצאת קבוצת הבית</label>
    <input type='text' name='sTeamScore' placeholder='sTeamScore' required>
    <label for='sTeamScore'>הכנס את תוצאת קבוצת החוץ</label>
    <input type='text' name='sTeamSymbol' placeholder='sTeamSymbol' required>
    <label for='sTeamSymbol'>הכנס קישור לסמל קבוצת החוץ</label>
    <button type='submit'>עדכן</button>     
</form>`
let editScore= document.querySelector('#scoreBar')
editScore.innerHTML= html
editScore.style.backgroundColor= 'white'
}
 async function updateScore(event){
    event.preventDefault()
	let elements= event.target.elements;
console.dir(elements)
console.dir(event)
	const results: score={
	fTeamSymbol: elements.fTeamSymbol.value,
	fTeamScore: elements.fTeamScore.value,
	 sTeamScore: elements.sTeamScore.value,
	sTeamSymbol: elements.sTeamSymbol.value,
	}
	//@ts-ignore
	const { data } = await axios.patch("/MTA/update-Score", { results });
	const Score = data;
	console.log(Score)
	reRenderScore(Score)
}
function reRenderScore(scores){
	const teamId = getTeamId();
	let score= scores[0]
	console.log(score.fTeamSymbol)
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
	<button onclick="editScore()">ערוך</button>
	</div>
	</div>`
	let bar= document.querySelector('#scoreBar')
	bar.innerHTML=html
}

interface article{
    headline:string,
    Id:string,
	photo:string,
    url:string,
    text:string,
}
async function getAllArticales() {
	//@ts-ignore
	const { data } = await axios.get('/MTA/get-articles');
	const { articles } = data;

	if (!Array.isArray(articles)) throw new Error('articles should be an array ant it is not');
	renderArticle(articles);
}

function renderArticle(articles){
	const teamId = getTeamId();
	let html=""
	articles.forEach((article) =>{
	html+=
	`<div class="article${teamId}">
    <div class="box3">
	<a href="${article.url}">
    <img src="${article.photo}" class="photo">
	</a>
    <p>${article.headline}</p>
    <h4>${article.text}</h4>  
	<button onclick="editArticle()">ערוך</button> 
    </div>`
    })
	let articleBar= document.querySelector('#articleBar')
	articleBar.innerHTML=html
}

function editArticle(){
    let html=""
    html+=` <form onsubmit='updateArticle(event)'>
    <label for='headline'></label>
    <input type='text' name='headline' placeholder='headline' required>
    <label for='headline'>הכנס כותרת</label>
    <input type='text' name='photo' class='photo' placeholder='photo' required>
    <label for='photo'>הכנס קישור לתמונה</label>
    <input type='text' name='url' placeholder='url' required>
    <label for='url'>הכנס קישור לכתבה</label>
    <input type='text' name='text' placeholder='text' required>
    <label for='text'>הכנס כותרת משנה</label>
	<input type='text' name='id' placeholder='text' required>
	<label for='id'>הכנס ID </label>
    <button type='submit'>עדכן</button>     
</form>`
let editArticle= document.querySelector('.box3')
editArticle.innerHTML= html
}
 async function updateArticle(event){
    event.preventDefault()
	let elements= event.target.elements;
	const results: article={
	 photo: elements.photo.value,
	 url: elements.url.value,
	 headline: elements.headline.value,
	 text: elements.text.value,
	 Id: elements.id.value
	}
	//@ts-ignore
	const { data } = await axios.patch("/MTA/update-Articles", { results });
	const articles = data;
	if (!Array.isArray(articles)) throw new Error('articles should be an array ant it is not');
	console.log(articles)
	reRenderArticles(articles)
}
function reRenderArticles(articles){
	const teamId = getTeamId();
	let html=""
	articles.forEach((article) =>{
	html+=
	`<div class="article${teamId}">
    <div class="box3">
	<a href="${article.url}">
    <img src="${article.photo}" class="photo">
	</a>
    <p>${article.headline}</p>
    <h4>${article.text}</h4>  
    <button onclick="editArticle()">ערוך</button> 
    </div>`
    })
	let articleBar= document.querySelector('#articleBar')
	articleBar.innerHTML=html
}
function GoToPage(){
	const teamId = getTeamId();
	let html=""
	html+=`<a href=MTA.html?Id=${teamId}>
	<button> עבור לדף המעודכן</button>
	</a>`
	let continuebotton= document.querySelector('.continueBotton')
	continuebotton.innerHTML=html
}