const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

const cubeArr = [
  {
    id:1,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:2,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:3,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:4,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:5,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:6,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:7,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:8,
		isCubeFull: 0,
		isFullX: 0,
  },
  {
    id:9,
		isCubeFull: 0,
		isFullX: 0,
  }
]

app.post('/api/postShapes', (req, res) => {
	try {
		const { squreId } = req.body;
		if (!squreId) throw new Error('squreId is required');
        renderSymbol(squreId);
        res.send({ squreArr })
	} catch (error) {
		res.send({ error: error.message });
	}
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });