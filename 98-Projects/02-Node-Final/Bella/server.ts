import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.json());

mongoose
    .connect("mongodb+srv://Bella:xFS7EsTQz8Frw7UL@cluster0.ceb2t.mongodb.net/?retryWrites=tru" +
        "e&w=majority")
    .then(() => {
        console.log("Connected to DB!");
    })
    .catch((err) => console.log(err));

app.use(express.static("public"));

import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);

import loginSignUpRoute from "./routes/loginSignUpRoute"
app.use("/users", loginSignUpRoute);

app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});
