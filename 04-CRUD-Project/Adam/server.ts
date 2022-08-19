const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
  interface stats{
  Shots:Number
  Corners:Number;
  Fouls:Number;
  }



app.get("/api/shots", (req, res) => {
  try {
      res.send([0] );
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/corners", (req, res) => {
  try {
      res.send();
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/fouls", (req, res) => {
  try {
      res.send();
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
