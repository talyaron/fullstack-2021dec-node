function showStat() {
    selectedfOption();
}
function selectedfOption() {
    try {
        // @ts-ignore
        axios.get("/api/get-stat").then(function (_a) {
            var data = _a.data;
            var selectedfOption = data.selectedfOption, error = data.error;
            if (error)
                throw new Error(error);
            console.dir(selectedfOption);
            fgetAllTeams(selectedfOption);
        });
    }
    catch (err) {
        console.error(err);
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
function renderDetailsf(teams) {
    var name = document.querySelector("#fteamName");
    name.innerText = "" + teams.teamName;
    var image = document.querySelector("#fTeam");
    image.src = "" + teams.teamimg;
}
