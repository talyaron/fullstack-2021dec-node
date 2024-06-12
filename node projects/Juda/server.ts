import express from "express";

const express = require("express");
const app = express();
const port = process.env.PORT|| 3000;


app.use(express.static('public'));
app.use(express.json());



import clubsRoute from "./routes/clubsRoute";
app.use('/danceClubs', clubsRoute);




// app.get("/danceClubs/findClub" ,(req, res) => {
// res.send('got it')

// })




app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })














