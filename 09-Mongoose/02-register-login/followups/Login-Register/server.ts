console.log("Connected!");
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 4006;
app.use(express.static('public'));
app.use(express.json());

import usersRoutes from "./routes/usersRoute";
app.use('/users', usersRoutes);


mongoose.connect(
  "mongodb+srv://ChicZiv:ebHag7UjL270SQei@cluster0.nbjog.mongodb.net/login-register?retryWrites=true&w=majority"
);
console.log("Connected to DB!");

app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});

