async function hundleClick(squreId: number) {
	console.log(squreId);
	try {
		// @ts-ignore
		const { data } = await axios.post('/api/drawSymbol',{ squreId });
		console.log(data);

		const { error } = data;
		if (error) throw new Error(error);
	} catch (error) {
		console.error(error);
	}
}

function renderSqure(squreArr) {

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