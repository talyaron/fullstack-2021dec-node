"use strict";

function handleEditing() {
  chooseTeam();
}

function selectedOption(event) {
  var selectedOption = event.target.value;
  console.dir(selectedOption);
  handleGetteams();
}

function chooseTeam() {
  var fTeam = document.querySelector('#fTeamSelect');
  fTeam.innerHTML = "<select  onchange=selectedOption(event)  name=\"team\" id=\"team\">\n    <option value=\"MTA\">MTA</option>\n    <option value=\"MHA\">MHA</option>\n    <option value=\"HBS\">HBS</option>\n    <option value=\"MNT\">MNT</option>\n    <option value=\"HPT\">HPT</option>\n    <option value=\"BNS\">BNS</option>\n  </select>";
  var sTeam = document.querySelector('#sTeamSelect');
  sTeam.innerHTML = "<select name=\"team\" id=\"team\">\n  <option value=\"MTA\">MTA</option>\n  <option value=\"MHA\">MHA</option>\n  <option value=\"HBS\">HBS</option>\n  <option value=\"MNT\">MNT</option>\n  <option value=\"HPT\">HPT</option>\n  <option value=\"BNS\">BNS</option>\n</select>";
  console.dir(sTeam);
}

var axios_1 = require("axios");

console.log(axios_1["default"]);

function handleGetteams() {
  try {
    axios_1["default"].get("/api/teams").then(function (_a) {
      var data = _a.data;
      console.log(data);
      var team = data.team,
          error = data.error;
      if (error) throw new Error(error);
      console.log(team);
    })["catch"](function (err) {
      return console.error(err);
    });
  } catch (error) {
    console.error(error);
  }
}