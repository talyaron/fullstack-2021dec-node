console.log("Yes! Connected!");

import mongoose from "mongoose";
import express from "express";
const app = express();
const port = process.env.PORT || 4009;
app.use(express.static("public"));
app.use(express.json());

import routePaint from './routes/routePaint';
app.use('/art', routePaint);

mongoose.connect(
  "mongodb+srv://ChicZiv:xRRIJs4WjEmo8f6W@cluster0.nbjog.mongodb.net/art-painting?retryWrites=true&w=majority"
);
console.log("Connected to DB!");

app.listen(port, () => {
  console.log(`Express is listening at ${port}`);
});




