const gameWrapper = document.querySelector('.game_wrapper');

let isGameWinX = false;
let isGameWinO = false;

async function hundleClick(squreId: string) {
	console.log(squreId);
	try {
		// @ts-ignore
		const { data } = await axios.post('/api/next-turn', { squreId });
		console.log(data);
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
	console.log(html)
	gameWrapper.innerHTML = html;
}

function checkIfWin(squreArr) {
	if (squreArr[0].isSqureX && squreArr[1].isSqureX && squreArr[2].isSqureX){
		return isGameWinX = true;
	} else if (squreArr[3].isSqureX && squreArr[4].isSqureX && squreArr[5].isSqureX){
		return isGameWinX = true;
	} else if (squreArr[6].isSqureX && squreArr[7].isSqureX && squreArr[8].isSqureX){
		return isGameWinX = true;
	} else if (squreArr[0].isSqureX && squreArr[4].isSqureX && squreArr[8].isSqureX){
		return isGameWinX = true;
	} else if (squreArr[2].isSqureX && squreArr[4].isSqureX && squreArr[6].isSqureX){
		return isGameWinX = true;
	} else if (squreArr[0].isSqureO && squreArr[1].isSqureO && squreArr[2].isSqureO){
		return isGameWinO = true;
	} else if (squreArr[3].isSqureO && squreArr[4].isSqureO && squreArr[5].isSqureO){
		return isGameWinO = true;
	} else if (squreArr[6].isSqureO && squreArr[7].isSqureO && squreArr[8].isSqureO){
		return isGameWinO = true;
	} else if (squreArr[0].isSqureO && squreArr[4].isSqureO && squreArr[8].isSqureO){
		return isGameWinO = true;
	} else if (squreArr[2].isSqureO && squreArr[4].isSqureO && squreArr[6].isSqureO){
		return isGameWinO = true;
	}
}

function whoWon(win) {
	if(isGameWinO) {
		alert(`User O won!`)
	} else if(isGameWinX) {
		alert(`User X won!`)
	}
}

// if (squreArr[squreId].isSqurefull === 0) {
//     if(squreArr[squreId].isSqureX) {
//         squreArr[squreId].isSqurefull = 1;
//         const drawSpace = document.getElementById(`sq${squreArr[squreId].id}`);
//         drawSpace.style.backgroundColor = "black";
//     } else if(squreArr[squreId].isSqureO) {
//         squreArr[squreId].isSqurefull = 1;
//         const drawSpace = document.getElementById(`sq${squreArr[squreId].id}`);
//         drawSpace.style.backgroundColor = "white";
//     }
// }
// };
