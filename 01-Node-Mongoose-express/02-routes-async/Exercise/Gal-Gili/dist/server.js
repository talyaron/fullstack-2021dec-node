var express = require('express');
var Interface = require('readline').Interface;
var app = express();
var port = process.env.PORT || 4000;
app.use(express.static('public'));
var imageArray = [
    {
        name: 'man',
        src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
        name: 'woman',
        src: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.1.2011762371.1644019200'
    }
];
app.listen(port, function () {
    console.log("server is listening on port " + port);
});
function getRandomArbitrary() {
    return Math.round(Math.random());
}
app.get('/api/randomImage', function (req, res) {
    try {
        res.send({ picture: imageArray[getRandomArbitrary()] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
