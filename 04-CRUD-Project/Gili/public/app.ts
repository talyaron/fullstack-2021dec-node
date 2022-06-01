const gameWrapper = document.querySelector('.game_wrapper') as HTMLDivElement;
const xWin = document.getElementById('Xwin') as HTMLSpanElement;
const oWin = document.getElementById('Owin') as HTMLSpanElement;

const socket = io('http://localhost:3000');

let isGameWinX = false;
let isGameWinO = false;

let WinningXTimes = 0;
let WinningOTimes = 0;
let gameEnded = false;

let moveCounter = 0;

drawCountersOnDOM();

async function hundleClick(squreId: string) {
	try {
		// @ts-ignore
		const { data } = await axios.post('/squres/next-turn', { squreId });
		const { squreArr, isXturn } = data;
		renderSqure(squreArr);
		const win = checkIfWin(squreArr);
		whoWon(win);
		const { error } = data;
		moveCounter++;
		checkIfDraw();
		if (error) throw new Error(error);
	} catch (error) {
		console.error(error);
	}
}

async function getTableStatus() {
	try {
		// @ts-ignore
		const { data } = await axios.get('/squres/table-status');
		const { squreArr } = data;
		renderSqure(squreArr);
		const { error } = data;
		if (error) throw new Error(error);
	} catch (error) {
		console.error(error);
	}
}

async function handleResetGame() {
	try {
		// @ts-ignore
		const { data } = await axios.get('/squres/reset-game');
		const { squreArr } = data;
		renderSqure(squreArr);
		isGameWinO = false;
		isGameWinX = false;
		moveCounter = 0;
		gameWrapper.style.pointerEvents = '';
		const { error } = data;
		if (error) throw new Error(error);
	} catch (error) {
		console.error(error);
	}
}

function handleResetCounters() {
	WinningOTimes = 0;
	WinningXTimes = 0;
	drawCountersOnDOM();
}

function renderSqure(squreArr) {
	gameWrapper.innerHTML = '';
	let html = '';
	squreArr.forEach((squre) => {
		if (squre.isSqureX) {
			html += `<div id='${squre.id}' class="squre" onclick="hundleClick('${squre.id}')">
			<i class="fa-solid fa-x"></i>
			</div> `;
		} else if (squre.isSqureO) {
			html += `<div id='${squre.id}' class="squre" onclick="hundleClick('${squre.id}')">
			<i class="fa-solid fa-o"></i>
			</div> `;
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
	} else if (squreArr[0].isSqureX && squreArr[3].isSqureX && squreArr[6].isSqureX) {
		return (isGameWinX = true);
	} else if (squreArr[1].isSqureX && squreArr[4].isSqureX && squreArr[7].isSqureX) {
		return (isGameWinX = true);
	} else if (squreArr[2].isSqureX && squreArr[5].isSqureX && squreArr[87].isSqureX) {
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
	} else if (squreArr[0].isSqureO && squreArr[3].isSqureO && squreArr[6].isSqureO) {
		return (isGameWinO = true);
	} else if (squreArr[1].isSqureO && squreArr[4].isSqureO && squreArr[7].isSqureO) {
		return (isGameWinO = true);
	} else if (squreArr[2].isSqureO && squreArr[5].isSqureO && squreArr[87].isSqureO) {
		return (isGameWinO = true);
	}
}

function checkIfDraw() {
	if (moveCounter === 9) {
		alert('Draw! please reset game');
	}
}

function whoWon(win) {
	if (isGameWinO) {
		alert(`User O won!`);
		gameWrapper.style.pointerEvents = 'none';
		WinningOTimes++;
		drawCountersOnDOM();
		handleResetGame();
	} else if (isGameWinX) {
		alert(`User X won!`);
		gameWrapper.style.pointerEvents = 'none';
		WinningXTimes++;
		drawCountersOnDOM();
		handleResetGame();
	}
}

function drawCountersOnDOM() {
	xWin.innerText = `${WinningXTimes}`;
	oWin.innerText = `${WinningOTimes}`;
}

setInterval(getTableStatus, 1000);
