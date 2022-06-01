let isXturn = true;

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


export function nextTurn(req, res) {
    try {
		const { squreId } = req.body;
		if (!squreId) throw new Error('squreId is required');
		renderSymbol(squreId);
		res.send({ squreArr, isXturn });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export function renderSymbol(squreId) {
	squreArr.forEach((squre) => {
		if (squre.id === squreId) {
			if (squre.isSqurefull === 0) {
				if (isXturn) {
					squre.isSqurefull = 1;
					squre.isSqureX = 1;
					nextTurnMove();
				} else if (!isXturn) {
					squre.isSqurefull = 1;
					squre.isSqureO = 1;
					nextTurnMove();
				}
			}
		}
	});
}

export function nextTurnMove() {
	if (isXturn) {
		isXturn = false;
	} else if (!isXturn) {
		isXturn = true;
	}
}

export function getTableStatus(req, res) {
    res.send({ squreArr });
}

export function resetGame(req, res) {
    if(!isXturn) {isXturn = true};
	squreArr.forEach((squre) => {
		if (squre.isSqurefull) {
			squre.isSqurefull = 0;
			squre.isSqureX = 0;
			squre.isSqureO = 0;
		}
	});
	res.send({ squreArr , isXturn});
}
