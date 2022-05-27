function handleEditing() {
    chooseTeam();
}
function chooseTeam() {
    var fTeam = document.querySelector('#fTeamSelect');
    fTeam.innerHTML = "<select  onchange=\"selectedfOption(event)\"  name=\"team\" id=\"team\">\n    <option value=\"\"></option>\n    <option value=\"MTA\">MTA</option>\n    <option value=\"MHA\">MHA</option>\n    <option value=\"HBS\">HBS</option>\n    <option value=\"MNT\">MNT</option>\n    <option value=\"HTA\">HTA</option>\n    <option value=\"BNS\">BNS</option>\n  </select>";
    var sTeam = document.querySelector('#sTeamSelect');
    sTeam.innerHTML = "<select onchange=\"selectedsOption(event)\" name=\"team\" id=\"team\">\n  <option value=\"\"></option>\n  <option value=\"MTA\">MTA</option>\n  <option value=\"MHA\">MHA</option>\n  <option value=\"HBS\">HBS</option>\n  <option value=\"MNT\">MNT</option>\n  <option value=\"HTA\">HTA</option>\n  <option value=\"BNS\">BNS</option>\n</select>";
}
function selectedfOption(event) {
    event.preventDefault();
    var selectedOption = event.target.value;
    handleGetfteam(selectedOption);
}
function handleGetfteam(selectedOption) {
    if (selectedOption === 'MTA') {
        try {
            axios.get('/api/MTA')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailsf(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'MHA') {
        try {
            axios.get('/api/MHA')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailsf(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'HBS') {
        try {
            axios.get('/api/HBS')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailsf(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'MNT') {
        try {
            axios.get('/api/MNT')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailsf(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'HTA') {
        try {
            axios.get('/api/HTA')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailsf(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'BNS') {
        try {
            axios.get('/api/BNS')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailsf(team);
                if (error)
                    throw new Error(error);
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
}
function selectedsOption(event) {
    var selectedOption = event.target.value;
    handleGetsteam(selectedOption);
}
function handleGetsteam(selectedOption) {
    if (selectedOption === 'MTA') {
        try {
            axios.get('/api/MTA')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailss(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'MHA') {
        try {
            axios.get('/api/MHA')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailss(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'HBS') {
        try {
            axios.get('/api/HBS')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailss(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'MNT') {
        try {
            axios.get('/api/MNT')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailss(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'HTA') {
        try {
            axios.get('/api/HTA')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailss(team);
                if (error)
                    throw new Error(error);
                ;
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    if (selectedOption === 'BNS') {
        try {
            axios.get('/api/BNS')
                .then(function (_a) {
                var data = _a.data;
                var team = data.team, error = data.error;
                renderDetailss(team);
                if (error)
                    throw new Error(error);
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
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
function fteamstat(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var result = {
        fTeamShots: elements.fTeamShots.value,
        fTeamshotsontarget: elements.fTeamshotsontarget.value,
        fTeamPossesion: elements.fTeamPossesion.value,
        fTeamYellowCards: elements.fTeamYellowCards.value,
        fTeamredCards: elements.fTeamredCards.value,
        fTeamcorners: elements.fTeamcorners.value
    };
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
    return result;
}
function steamstat(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var result = {
        sTeamShots: elements.sTeamShots.value,
        sTeamshotsontarget: elements.sTeamshotsontarget.value,
        sTeamPossesion: elements.sTeamPossesion.value,
        sTeamYellowCards: elements.sTeamYellowCards.value,
        sTeamredCards: elements.sTeamredCards.value,
        sTeamcorners: elements.sTeamcorners.value
    };
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
    return result;
}
