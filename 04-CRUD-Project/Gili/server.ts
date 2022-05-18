console.log(`Connected!`);
//@ts-ignore
const express = require('express');
const app = express();
//@ts-ignore
const port = process.env.PORT || 3000;

app.use(express.json());

let isXturn = true;
const sq = 'sq';
const room1arr = [];
const room2arr = [];
const room3arr = [];

app.use(express.static('public'));
app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});



// class Squre {
// 	id:string;
// 	isSqurefull:number;
// 	isSqureX:number;
// 	isSqureO:number;

// 	constructor(id:string, isSqurefull:number, isSqureX:number, isSqureO:number) {
// 		this.id = id;
// 		this.isSqurefull = isSqurefull;
// 		this.isSqureX = isSqureX;
// 		this.isSqureO = isSqureO;
// 	}
// }

const squreArr = [
	{
		id: 'sq0',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq1',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq2',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq3',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq4',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq5',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq6',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq7',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
		id: 'sq8',
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	}
];

// function NewArrayByRoom(roomId){
	
// 	if(roomId === 1) {
// 		const fullArr1 = CreateArray(room1arr)
// 		return fullArr1;
// 	} else if (roomId === 2){
// 		const fullArr2 = CreateArray(room2arr)
// 		return fullArr2;
// 	} else if (roomId === 3){
// 		const fullArr3 = CreateArray(room3arr)
// 		return fullArr3;
// 	}
	
// }

// function CreateArray(arr) {
// 	for(let i = 0; i < 9; i++) {
// 		const newSqure = new Squre(`sq${i}`,0,0,0)
// 		arr.push(newSqure);
// 	}
// 	return arr;
// }

// app.send('/api/roomID', (req, res) => {
// 	const { roomId } = req.body;
// 	if (!roomId) throw new Error('roomId is required');
// 	NewArrayByRoom(roomId);
// 	res.send({})
// })

app.post('/api/next-turn', (req, res) => {
	try {
		const { squreId } = req.body;
		if (!squreId) throw new Error('squreId is required');
		renderSymbol(squreId);
		res.send({ squreArr , isXturn});
	} catch (error) {
		res.send({ error: error.message });
	}
});

app.get('/api/table-status', (req, res) => {
	res.send({ squreArr });
})

function renderSymbol(squreId) {
	squreArr.forEach((squre) => {
		if (squre.id === squreId) {
			if (squre.isSqurefull === 0) {
				if (isXturn) {
					squre.isSqurefull = 1;
					squre.isSqureX = 1;
                    nextTurn()
				} else if (!isXturn) {
					squre.isSqurefull = 1;
					squre.isSqureO = 1;
                    nextTurn()
				}
			}
		}
	});
}

function nextTurn() {
	if (isXturn) {
		isXturn = false;
	} else if (!isXturn) {
		isXturn = true;
	}
}
// console.log(window.location.search.substr(1))

