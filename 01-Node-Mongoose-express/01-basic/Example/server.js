const express = require("express");
const app = express();
const port = process.env.PORT|| 4000;



app.use(express.static('public'));

//data routes
//route home
app.get("/", (req, res) => {
  res.send("Hello World! 2323244");
});

//route bla
app.get("/bla", (req, res) => {
  res.send("bla bla");
});

function multi(a, b) {
  return a * b;
}

//route multi
app.get("/multi", (req, res) => {
  res.send(`<h1>${multi(6, 7)}</h1>`);
});

//
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

