import express  from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

const port = process.env.PORT || 3000

const app = express();
app.use(cookieParser());
require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());

const URI:any = process.env.MONGO_URI;

mongoose.connect(URI).then(res => {
    console.log("Connected to DB");
  }).catch(err => {
    console.log('At mongoose.connect:')
    console.error(err.message)
  });

  import userRoute from './router/usersRouts';
  app.use('/users', userRoute)
  import eventsRoute from './router/eventsRout';
  app.use('/events', eventsRoute)

  app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });