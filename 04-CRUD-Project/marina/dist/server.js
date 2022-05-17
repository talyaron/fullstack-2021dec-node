// @ts-ignore
var express = require('express');
var app = express();
// @ts-ignore
var port = process.env.PORT || 4006;
// @ts-ignore
app.use(express.static(__dirname + '/public'));
app.use(express.json());
// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// };
var winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
app.get('/', function (req, res) {
    try {
        res.send();
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Express is listening at " + port);
});
