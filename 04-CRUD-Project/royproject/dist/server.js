<<<<<<< HEAD
// @ts-ignore 
var express = require("express");
var app = express();
//  @ts-ignore  
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var teams = [
    { teamName: 'MTA', teamimg: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png', userId: 0 },
    { teamName: 'MHA', teamimg: 'https://www.israelhayom.co.il/wp-content/uploads/2022/02/15957536341325_b.jpg', userId: 1 },
    { teamName: 'HBS', teamimg: 'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png', userId: 2 },
    { teamName: 'MNT', teamimg: 'https://upload.wikimedia.org/wikipedia/he/b/bc/MaccabiNetanyaNewlogo2021.png', userId: 3 },
    { teamName: 'HTA', teamimg: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png', userId: 4 },
    { teamName: 'BNS', teamimg: 'https://upload.wikimedia.org/wikipedia/he/b/bb/Hapo%C3%83%C2%ABl_Bnei_Sakhnin.png', userId: 5 },
];
app.get("/api/get-teams", function (req, res) {
    try {
        res.send({ teams: teams });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
var fstat = [];
app.get("/api/get-stat", function (req, res) {
    try {
        res.send({ fstat: fstat });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/add-fresult', function (req, res) {
    try {
        var _a = req.body, fTeamShots = _a.fTeamShots, fTeamshotsontarget = _a.fTeamshotsontarget, fTeamPossesion = _a.fTeamPossesion, fTeamYellowCards = _a.fTeamYellowCards, fTeamredCards = _a.fTeamredCards, fTeamcorners = _a.fTeamcorners;
        var fResult = { fTeamShots: fTeamShots, fTeamshotsontarget: fTeamshotsontarget, fTeamPossesion: fTeamPossesion, fTeamYellowCards: fTeamYellowCards, fTeamredCards: fTeamredCards, fTeamcorners: fTeamcorners };
        res.send({ fResult: fResult });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
var sstat = [];
app.get("/api/get-sstat", function (req, res) {
    try {
        res.send({ sstat: sstat });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/add-sresult', function (req, res) {
    try {
        var _a = req.body, sTeamShots = _a.sTeamShots, sTeamshotsontarget = _a.sTeamshotsontarget, sTeamPossesion = _a.sTeamPossesion, sTeamYellowCards = _a.sTeamYellowCards, sTeamredCards = _a.sTeamredCards, sTeamcorners = _a.sTeamcorners;
        var sResult = { sTeamShots: sTeamShots, sTeamshotsontarget: sTeamshotsontarget, sTeamPossesion: sTeamPossesion, sTeamYellowCards: sTeamYellowCards, sTeamredCards: sTeamredCards, sTeamcorners: sTeamcorners };
        sstat.push(sResult);
        res.send({ sstat: sstat });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
=======
// @ts-ignore 
var express = require("express");
var app = express();
//  @ts-ignore  
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var teams = [
    { teamName: 'MTA', teamimg: 'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png', userId: 0 },
    { teamName: 'MHA', teamimg: 'https://www.israelhayom.co.il/wp-content/uploads/2022/02/15957536341325_b.jpg', userId: 1 },
    { teamName: 'HBS', teamimg: 'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png', userId: 2 },
    { teamName: 'MNT', teamimg: 'https://upload.wikimedia.org/wikipedia/he/b/bc/MaccabiNetanyaNewlogo2021.png', userId: 3 },
    { teamName: 'HTA', teamimg: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png', userId: 4 },
    { teamName: 'BNS', teamimg: 'https://upload.wikimedia.org/wikipedia/he/b/bb/Hapo%C3%83%C2%ABl_Bnei_Sakhnin.png', userId: 5 },
];
app.get("/api/get-teams", function (req, res) {
    try {
        res.send({ teams: teams });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/add-fselected', function (req, res) {
    try {
        var selectedOption_1 = req.body.selectedOption;
        var fselected_1 = { selectedOption: selectedOption_1 };
        teams.push(fselected_1);
        res.send({ fselected: fselected_1 });
        app.get("/api/get-teams", function (req, res) {
            try {
                var selectedfOption = teams.findIndex(function (team) { return team.userId === fselected_1.userId; });
                teams.filter(userId !== selectedOption_1.);
                res.send({ selectedfOption: selectedfOption });
            }
            catch (error) {
                res.send({ error: error.message });
            }
        });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
var fstat = [];
app.get("/api/get-stat", function (req, res) {
    try {
        res.send({ fstat: fstat });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/add-fresult', function (req, res) {
    try {
        var _a = req.body, fTeamShots = _a.fTeamShots, fTeamshotsontarget = _a.fTeamshotsontarget, fTeamPossesion = _a.fTeamPossesion, fTeamYellowCards = _a.fTeamYellowCards, fTeamredCards = _a.fTeamredCards, fTeamcorners = _a.fTeamcorners;
        var fResult = { fTeamShots: fTeamShots, fTeamshotsontarget: fTeamshotsontarget, fTeamPossesion: fTeamPossesion, fTeamYellowCards: fTeamYellowCards, fTeamredCards: fTeamredCards, fTeamcorners: fTeamcorners };
        res.send({ fResult: fResult });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
var sstat = [];
app.get("/api/get-sstat", function (req, res) {
    try {
        res.send({ sstat: sstat });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/add-sresult', function (req, res) {
    try {
        var _a = req.body, sTeamShots = _a.sTeamShots, sTeamshotsontarget = _a.sTeamshotsontarget, sTeamPossesion = _a.sTeamPossesion, sTeamYellowCards = _a.sTeamYellowCards, sTeamredCards = _a.sTeamredCards, sTeamcorners = _a.sTeamcorners;
        var sResult = { sTeamShots: sTeamShots, sTeamshotsontarget: sTeamshotsontarget, sTeamPossesion: sTeamPossesion, sTeamYellowCards: sTeamYellowCards, sTeamredCards: sTeamredCards, sTeamcorners: sTeamcorners };
        sstat.push(sResult);
        res.send({ sstat: sstat });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
>>>>>>> 0eb6e59721d8e71b287bbf8575754e9fe68a9eb4
