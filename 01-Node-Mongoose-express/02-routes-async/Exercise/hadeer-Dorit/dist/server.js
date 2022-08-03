var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var imgs = [
    { src: 'https://us.123rf.com/450wm/clairev/clairev1608/clairev160800097/61499500-school-class-theme.jpg?ver=6', name: 'class1' },
    { src: 'https://us.123rf.com/450wm/tigatelu/tigatelu1509/tigatelu150900396/45092207-cartoon-little-kid-a-study-in-the-classroom.jpg?ver=6', name: 'class2' },
];
app.get('/api/img1', function (req, res) {
    try {
        res.send({ Img: imgs[0]['src'] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/img2', function (req, res) {
    try {
        res.send({ Img: imgs[1]['src'] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
