import  express  from "express";
import mongoose from "mongoose";

const app = express()
 
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://username:password@host:port/database?options...')