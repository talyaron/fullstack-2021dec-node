console.log(`Connected!`);
//@ts-ignore
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

let users = 0;

server.listen(3000, () => {
	console.log('listening on *:3000');
});

io.on('connection', (socket) => {
	users++;
	console.log(`user number ${users} has connected to room`);
	socket.on('disconnect', () => {
		users--;
		console.log(`user number ${users} has connected to room`);
	});
});

app.use(express.json());

let isXturn = true;
const sq = 'sq';
const room1arr = [];
const room2arr = [];
const room3arr = [];

app.use(express.static('public'));

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

app.get('/api/roomID', (req, res) => {
	const { roomId } = req.body;
	if (!roomId) throw new Error('roomId is required');
	// NewArrayByRoom(roomId);
	res.send({ data: `approved roomId is: ${roomId}` });
});

app.post('/api/next-turn', (req, res) => {
	try {
		const { squreId } = req.body;
		if (!squreId) throw new Error('squreId is required');
		renderSymbol(squreId);
		res.send({ squreArr, isXturn });
	} catch (error) {
		res.send({ error: error.message });
	}
});

app.get('/api/table-status', (req, res) => {
	res.send({ squreArr });
});

app.get('/api/reset-game', (req, res) => {
	if(!isXturn) {isXturn = true};
	squreArr.forEach((squre) => {
		if (squre.isSqurefull) {
			squre.isSqurefull = 0;
			squre.isSqureX = 0;
			squre.isSqureO = 0;
		}
	});
	
	res.send({ squreArr , isXturn});
});

function renderSymbol(squreId) {
	squreArr.forEach((squre) => {
		if (squre.id === squreId) {
			if (squre.isSqurefull === 0) {
				if (isXturn) {
					squre.isSqurefull = 1;
					squre.isSqureX = 1;
					nextTurn();
				} else if (!isXturn) {
					squre.isSqurefull = 1;
					squre.isSqureO = 1;
					nextTurn();
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
