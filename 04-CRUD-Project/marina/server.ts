// @ts-ignore
const express = require('express');
const app = express();
// @ts-ignore
const port = process.env.PORT || 4006;
// @ts-ignore
app.use(express.static('public'));
app.use(express.json()); 



const winCombination: any = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


app.get('/', (req, res) => {

    try {
        res.send();

    } catch (error) {
        res.send({ error: error.message });
    }

});

app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});