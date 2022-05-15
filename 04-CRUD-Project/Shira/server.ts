const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

app.get("/api/get-boxes", (req, res) => {
    try {
      res.send({ boxes });
    } catch (error) {
      res.send({ error: error.message });
    }
  });



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });