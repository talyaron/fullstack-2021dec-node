console.log("hi!");
var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.use(express.static('public'));
var imageArray = [
    {
        src: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
        discription: 'This is a cuter cat',
        id: 1
    },
    {
        src: 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
        discription: 'adorable',
        id: 2
    },
    {
        src: 'https://images.everydayhealth.com/images/pet-health/cs-pet-health-cat-exercises-1440x810.jpg',
        discription: 'Ball of floff',
        id: 3
    },
    {
        src: 'https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Buying%20a%20cat%201000x600.jpeg?itok=nvUseKh2',
        discription: 'Cutie',
        id: 4
    }
];
app.listen(port, function () {
    console.log("server listen port " + port);
});
app.get("/api/cat-images", function (req, res) {
    try {
        res.send({ imageArray: imageArray });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
