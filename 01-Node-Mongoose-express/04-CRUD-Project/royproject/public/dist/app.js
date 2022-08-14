function handleEditing() {
    chooseTeam();
}
function chooseTeam() {
    var fTeam = document.querySelector('#fTeamSelect');
    fTeam.innerHTML = "<select  onblur=\"selectedfOption(event)\"  name=\"team\" id=\"team\">\n    <option value=\"\"></option>\n    <option value=\"MTA\">MTA</option>\n    <option value=\"MHA\">MHA</option>\n    <option value=\"HBS\">HBS</option>\n    <option value=\"MNT\">MNT</option>\n    <option value=\"HTA\">HTA</option>\n    <option value=\"BNS\">BNS</option>\n  </select>";
    var sTeam = document.querySelector('#sTeamSelect');
    sTeam.innerHTML = "<select onblur=\"selectedsOption(event)\" name=\"team\" id=\"team\">\n  <option value=\"\"></option>\n  <option value=\"MTA\">MTA</option>\n  <option value=\"MHA\">MHA</option>\n  <option value=\"HBS\">HBS</option>\n  <option value=\"MNT\">MNT</option>\n  <option value=\"HTA\">HTA</option>\n  <option value=\"BNS\">BNS</option>\n</select>";
}
function selectedfOption(event) {
    try {
        event.preventDefault();
        var selectedOption = event.target.value;
        fgetAllTeams(selectedOption);
    }
    catch (error) {
    }
}
function fgetAllTeams(selectedOption) {
    try {
        // @ts-ignore
        axios.get("/api/get-teams").then(function (_a) {
            var data = _a.data;
            var teams = data.teams, error = data.error;
            console.log(teams);
            var seletedindex = teams.findIndex(function (team) { return team.teamName === selectedOption; });
            console.log(seletedindex);
            var selectedTeam = teams[seletedindex];
            console.dir(selectedTeam);
            renderDetailsf(selectedTeam);
            if (error)
                throw new Error(error);
        });
    }
    catch (err) {
        console.error(err);
    }
}
function selectedsOption(event) {
    var selectedOption = event.target.value;
    event.preventDefault();
    sgetAllTeams(selectedOption);
}
function sgetAllTeams(selectedOption) {
    try {
        // @ts-ignore
        axios.get("/api/get-teams").then(function (_a) {
            var data = _a.data;
            var teams = data.teams, error = data.error;
            console.log(teams);
            var seletedindex = teams.findIndex(function (team) { return team.teamName === selectedOption; });
            console.log(seletedindex);
            var selectedTeam = teams[seletedindex];
            console.dir(selectedTeam);
            renderDetailss(selectedTeam);
            renderSTeam(selectedTeam);
            if (error)
                throw new Error(error);
        });
    }
    catch (err) {
        console.error(err);
    }
}
function renderDetailsf(teams) {
    var name = document.querySelector("#fteamName");
    name.innerText = "" + teams.teamName;
    var image = document.querySelector("#fTeam");
    image.src = "" + teams.teamimg;
}
function renderDetailss(teams) {
    var name = document.querySelector("#steamName");
    name.innerText = "" + teams.teamName;
    var image = document.querySelector("#sTeam");
    image.src = "" + teams.teamimg;
}
function getFStat() {
    try {
        // @ts-ignore
        axios.get("/api/get-stat").then(function (_a) {
            var data = _a.data;
            var fstat = data.fstat, error = data.error;
            if (error)
                throw new Error(error);
            console.dir(fstat);
        });
    }
    catch (err) {
        console.error(err);
    }
}
function fTeamStat(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var fTeamShots = elements.fTeamShots.value;
    var fTeamshotsontarget = elements.fTeamshotsontarget.value;
    var fTeamPossesion = elements.fTeamPossesion.value;
    var fTeamYellowCards = elements.fTeamYellowCards.value;
    var fTeamredCards = elements.fTeamredCards.value;
    var fTeamcorners = elements.fTeamcorners.value;
    getFStat();
    // @ts-ignore
    axios.post('/api/add-fresult', { fTeamShots: fTeamShots, fTeamshotsontarget: fTeamshotsontarget, fTeamPossesion: fTeamPossesion, fTeamYellowCards: fTeamYellowCards, fTeamredCards: fTeamredCards, fTeamcorners: fTeamcorners }).then(function (_a) {
        var data = _a.data;
        var fResult = data.fResult, error = data.error;
        console.dir(fResult);
        //clientLoad(fResult)
        if (error)
            throw new Error(error);
    });
}
function getsStat() {
    try {
        // @ts-ignore
        axios.get("/api/get-sstat").then(function (_a) {
            var data = _a.data;
            var sstat = data.sstat, error = data.error;
            if (error)
                throw new Error(error);
        });
    }
    catch (err) {
        console.error(err);
    }
}
function sTeamStat(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var sTeamShots = elements.sTeamShots.value;
    var sTeamshotsontarget = elements.sTeamshotsontarget.value;
    var sTeamPossesion = elements.sTeamPossesion.value;
    var sTeamYellowCards = elements.sTeamYellowCards.value;
    var sTeamredCards = elements.sTeamredCards.value;
    var sTeamcorners = elements.sTeamcorners.value;
    getsStat();
    // @ts-ignore
    axios.post('/api/add-sresult', { sTeamShots: sTeamShots, sTeamshotsontarget: sTeamshotsontarget, sTeamPossesion: sTeamPossesion, sTeamYellowCards: sTeamYellowCards, sTeamredCards: sTeamredCards, sTeamcorners: sTeamcorners }).then(function (_a) {
        var data = _a.data;
        var sstat = data.sstat, error = data.error;
        clientLoad(sstat);
        if (error)
            throw new Error(error);
    });
}
function clientLoad(sstat) {
    var result = sstat[0];
    var sTeamStat = document.querySelectorAll('.fTeamClientstats');
    console.log(sTeamStat);
    sTeamStat.innerText = "<div id=sTeamShots>" + result.sTeamShots + "</div>\n     <div id=sTeamshotsontarget>" + result.sTeamshotsontarget + "</div>\n     <div id=sTeamPossesion>" + result.sTeamPossesion + "</div>\n     <div id=sTeamYellowCards>" + result.sTeamYellowCards + "</div>\n     <div id=sTeamredCardshots>" + result.sTeamredCards + "</div>\n     <div id=sTeamcorners>" + result.sTeamcorners + "</div>";
    renderclient(sTeamStat.innerText);
}
function renderclient(stat) {
    var sTeamStat = document.querySelectorAll('.fTeamClientstats');
    sTeamStat.innerText = stat;
}
function renderSTeam(teams) {
    var name = document.querySelectorAll("#fteamName");
    name.innerText = "" + teams.teamName;
    console.log(name);
    var image = document.querySelectorAll("#fTeam");
    image.src = "" + teams.teamimg;
}
