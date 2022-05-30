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
  
}

const teams:Array<team>=[
  {teamName:'MTA', teamimg:'https://upload.wikimedia.org/wikipedia/he/4/45/Maccabi_Tel_Aviv_FC.png'},
  {teamName:'MHA', teamimg:'https://www.israelhayom.co.il/wp-content/uploads/2022/02/15957536341325_b.jpg'},
  {teamName:'HBS', teamimg:'https://upload.wikimedia.org/wikipedia/he/e/eb/LogoOfHBS.png'},
  {teamName:'MNT', teamimg:'https://upload.wikimedia.org/wikipedia/he/b/bc/MaccabiNetanyaNewlogo2021.png'},
  {teamName:'HTA', teamimg:'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/640px-Hapoel_Tel_Aviv_Logo.png'},
  {teamName:'BNS', teamimg:'https://upload.wikimedia.org/wikipedia/he/b/bb/Hapo%C3%83%C2%ABl_Bnei_Sakhnin.png'},
]

app.get('/api/MTA', (req, res)=>{
  try {
          res.send({team:teams[0]});
  } catch (error) {
          res.send({error:error.message})
  }
});

app.get('/api/MHA', (req, res)=>{
  try {
          res.send({team:teams[1]});
  } catch (error) {
          res.send({error:error.message})
  }
});

app.get('/api/HBS', (req, res)=>{
  try {
          res.send({team:teams[2]});
  } catch (error) {
          res.send({error:error.message})
  }
});

app.get('/api/MNT', (req, res)=>{
  try {
          res.send({team:teams[3]});
  } catch (error) {
          res.send({error:error.message})
  }
});

app.get('/api/HTA', (req, res)=>{
  try {
          res.send({team:teams[4]});
  } catch (error) {
          res.send({error:error.message})
  }
});

app.get('/api/BNS', (req, res)=>{
  try {
          res.send({team:teams[5]});
  } catch (error) {
          res.send({error:error.message})
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});