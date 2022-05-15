console.log(`Connected!`);

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

let isXturn = true;

app.use(express.static('public'));
app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});

const squreArr = [
	{
        id:0,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:1,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:2,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:3,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:4,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:5,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:6,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:7,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
	{
        id:8,
		isSqurefull: 0,
		isSqureX: 0,
		isSqureO: 0
	},
];

app.post('/api/drawSymbol', (req, res) => {
	try {
		const { squreId } = req.body;
		if (!squreId) throw new Error('squreId is required');
        renderSymbol(squreId);
        res.send({ squreArr })
	} catch (error) {
		res.send({ error: error.message });
	}
});

function renderSymbol(squreId) {
		if (squreArr[squreId].isSqurefull === 0) {
            if(isXturn) {
                squreArr[squreId].isSqurefull = 1;
                squreArr[squreId].isSqureX = 1;
            } else if(!isXturn) {
                squreArr[squreId].isSqurefull = 1;
                squreArr[squreId].isSqureO = 1;
            }
		}
	};

function nextTurn() {
    if(isXturn){
        isXturn = false;
    } else if(!isXturn) {
        isXturn = true;
    }
    
}
// console.log(window.location.search.substr(1))
