const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
interface Stats{
  Shots:number
  ShotsOnTarget:number
  Corners:number
  Possesion:number
  Fouls:number
  YellowCards:number
  RedCards:number

}


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
