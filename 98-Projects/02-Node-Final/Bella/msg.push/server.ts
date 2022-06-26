import express from 'express';
import jquery from "jquery";

const app = express();
const port = process.env.PORT || 4000;
app.use(express.static("public"));
app.use(express.json());

import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);

import loginSignUpRoute from "./routes/loginSignUpRoute";
app.use("/users", loginSignUpRoute);




app.listen(port, () => {
  console.log(`Express is listening at ${port}`);
});
