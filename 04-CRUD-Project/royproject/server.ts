// @ts-ignore 
const express = require("express");
const app = express();
//  @ts-ignore  
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface team{
  teamName:string,
  teamimg:string,
  userId:number,
  
}

const teams:Array<team>=[
  {teamName:'MTA', teamimg:'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png', userId:0,},
  {teamName:'MHA', teamimg:'https://www.israelhayom.co.il/wp-content/uploads/2022/02/15957536341325_b.jpg',userId:1},
  {teamName:'HBS', teamimg:'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png',userId:2},
  {teamName:'MNT', teamimg:'https://upload.wikimedia.org/wikipedia/he/b/bc/MaccabiNetanyaNewlogo2021.png',userId:3},
  {teamName:'HTA', teamimg:'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png',userId:4},
  {teamName:'BNS', teamimg:'https://upload.wikimedia.org/wikipedia/he/b/bb/Hapo%C3%83%C2%ABl_Bnei_Sakhnin.png',userId:5},
]
app.get("/api/get-teams", (req, res) => {
        try {
          res.send({ teams });
        } catch (error) {
          res.send({ error: error.message });
        }
      });
      app.post('/api/add-fselected', (req, res) => {
        try {
          const { selectedOption  } = req.body;
          const fselected:team= { selectedOption  }
          teams.push(fselected)
          res.send({ fselected });
         app.get("/api/get-teams", (req, res) => {
                try {
                 const selectedfOption =teams.findIndex(team=>team.userId===fselected.userId)
                 teams.filter(userId!==selectedOption.)
                  res.send({ selectedfOption });
                } catch (error) {
                  res.send({ error: error.message });
                }
              });
        } catch (error) {
          res.send({ error: error.message });
        }
      })

      

interface fstats{
 fTeamShots:number,
fTeamshotsontarget:number,
fTeamPossesion:number,
fTeamYellowCards:number,
fTeamredCards:number,
fTeamcorners:number,
}
const fstat:Array<fstats>=[]
app.get("/api/get-stat", (req, res) => {
        try {
          res.send({ fstat });
        } catch (error) {
          res.send({ error: error.message });
        }
      });
app.post('/api/add-fresult', (req, res) => {
        try {
          const {fTeamShots, fTeamshotsontarget, fTeamPossesion, fTeamYellowCards, fTeamredCards, fTeamcorners  } = req.body;
          const fResult:fstats= { fTeamShots, fTeamshotsontarget, fTeamPossesion, fTeamYellowCards, fTeamredCards, fTeamcorners }
          res.send({ fResult });
      
        } catch (error) {
          res.send({ error: error.message });
        }
      })

      interface sstats{
        sTeamShots:number,
       sTeamshotsontarget:number,
       sTeamPossesion:number,
       sTeamYellowCards:number,
       sTeamredCards:number,
       sTeamcorners:number,
       }
       const sstat:Array<sstats>=[]
       
        app.get("/api/get-sstat", (req, res) => {
        try {
          res.send({ sstat });
        } catch (error) {
          res.send({ error: error.message });
        }
      });

      app.post('/api/add-sresult', (req, res) => {
        try {
          const {sTeamShots, sTeamshotsontarget, sTeamPossesion, sTeamYellowCards, sTeamredCards, sTeamcorners  } = req.body;
          const sResult:sstats= { sTeamShots, sTeamshotsontarget, sTeamPossesion, sTeamYellowCards, sTeamredCards, sTeamcorners }
          sstat.push(sResult)
          res.send({ sstat });
      
        } catch (error) {
          res.send({ error: error.message });
        }
      })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});