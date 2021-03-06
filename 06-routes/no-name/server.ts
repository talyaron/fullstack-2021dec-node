console.log("I'm connected!");

import express from "express";
const app = express();
const port = process.env.PORT || 4006;
app.use(express.static("public"));
app.use(express.json());


import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute)

app.listen(port, () => {
  console.log(`Express is listening at ${port}`);
});
