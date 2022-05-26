import express from "express";
// import mongoose from "mongoose";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

import usersRoute from "./route/usersRout";
app.use("/users", usersRoute);

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
