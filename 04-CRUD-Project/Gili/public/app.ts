const gameWrapper = document.querySelector('.game_wrapper');
const idForRoomSpan = document.querySelector('#idForRoomSpan') as HTMLSpanElement;

const socket = io('http://localhost:3000');

let isGameWinX = false;
let isGameWinO = false;

async function getRoomID(){
	const roomId = window.location.search.substr(1);
	const { data } = await axios.get('/api/roomID', { roomId });
	console.log(data)
	idForRoomSpan.innerText = data;
}

async function hundleClick(squreId: string) {
	try {
		// @ts-ignore
		const { data } = await axios.post('/api/next-turn', { squreId });
		const { squreArr, isXturn } = data;
		renderSqure(squreArr);
		const win = checkIfWin(squreArr);
		whoWon(win);
		const { error } = data;
		if (error) throw new Error(error);
	} catch (error) {
		console.error(error);
	}
}
async function getTableStatus() {
	try {
		// @ts-ignore
		const { data } = await axios.get('/api/table-status');
		const { squreArr } = data;
		renderSqure(squreArr);
		const { error } = data;
		if (error) throw new Error(error);
	} catch (error) {
		console.error(error);
	}
}

function renderSqure(squreArr) {
	gameWrapper.innerHTML = '';
	let html = '';
	squreArr.forEach((squre) => {
		if (squre.isSqureX) {
			html += `<div id='${squre.id}' class="squre black" onclick="hundleClick('${squre.id}')"></div> `;
		} else if (squre.isSqureO) {
			html += `<div id='${squre.id}' class="squre wheat" onclick="hundleClick('${squre.id}')"></div> `;
		} else {
			html += `<div id='${squre.id}' class="squre" onclick="hundleClick('${squre.id}')"></div> `;
		}
	});

	gameWrapper.innerHTML = html;
}

function checkIfWin(squreArr) {
	if (squreArr[0].isSqureX && squreArr[1].isSqureX && squreArr[2].isSqureX) {
		return (isGameWinX = true);
	} else if (squreArr[3].isSqureX && squreArr[4].isSqureX && squreArr[5].isSqureX) {
		return (isGameWinX = true);
	} else if (squreArr[6].isSqureX && squreArr[7].isSqureX && squreArr[8].isSqureX) {
		return (isGameWinX = true);
	} else if (squreArr[0].isSqureX && squreArr[4].isSqureX && squreArr[8].isSqureX) {
		return (isGameWinX = true);
	} else if (squreArr[2].isSqureX && squreArr[4].isSqureX && squreArr[6].isSqureX) {
		return (isGameWinX = true);
	} else if (squreArr[0].isSqureO && squreArr[1].isSqureO && squreArr[2].isSqureO) {
		return (isGameWinO = true);
	} else if (squreArr[3].isSqureO && squreArr[4].isSqureO && squreArr[5].isSqureO) {
		return (isGameWinO = true);
	} else if (squreArr[6].isSqureO && squreArr[7].isSqureO && squreArr[8].isSqureO) {
		return (isGameWinO = true);
	} else if (squreArr[0].isSqureO && squreArr[4].isSqureO && squreArr[8].isSqureO) {
		return (isGameWinO = true);
	} else if (squreArr[2].isSqureO && squreArr[4].isSqureO && squreArr[6].isSqureO) {
		return (isGameWinO = true);
	}
}

function whoWon(win) {
	if (isGameWinO) {
		alert(`User O won!`);
	} else if (isGameWinX) {
		alert(`User X won!`);
	}
}

setInterval(getTableStatus,1000)

// const link = document.querySelector('.link')

// const randomNum = () => {
//     return Math.round(Math.random() * 10)
// }

// console.log(randomNum())

// link.addEventListener('click', () => {
//     link.href = `room.html?${randomNum()}`
// })

