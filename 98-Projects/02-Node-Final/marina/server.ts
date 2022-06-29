console.log("Connected now!");
import uid from "./helpers";
import express from "express";
const app = express();
const port = process.env.PORT || 4006;
app.use(express.static("public"));
app.use(express.json());

import gameRoutes from "./routes/gameRoutes";
app.use("/game", gameRoutes);

app.listen(port, () => {
  console.log(`Express is listening at ${port}`);
});

