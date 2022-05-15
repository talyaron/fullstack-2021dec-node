var express = require("express");
var app = express();
var port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.static('public'));
var teams = [
    { teamName: 'MTA', teamimg: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png' },
    { teamName: 'MHA', teamimg: 'https://www.israelhayom.co.il/wp-content/uploads/2022/02/15957536341325_b.jpg' },
    { teamName: 'HBS', teamimg: 'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png' },
    { teamName: 'MNT', teamimg: 'https://upload.wikimedia.org/wikipedia/he/b/bc/MaccabiNetanyaNewlogo2021.png' },
    { teamName: 'HPT', teamimg: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png' },
    { teamName: 'BNS', teamimg: 'https://upload.wikimedia.org/wikipedia/he/b/bb/Hapo%C3%83%C2%ABl_Bnei_Sakhnin.png' },
];
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
