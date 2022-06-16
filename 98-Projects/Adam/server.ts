const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

import itemsRoute from "./routes/items";
app.use("/items", itemsRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
