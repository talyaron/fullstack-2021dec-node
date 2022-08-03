import  express  from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
// require("dotenv").config();
// const url = process.env.MONGODB_URL;

const port = 3000;

const app = express();
app.use(express.json());

app.use(cookieParser())

app.use(express.static('public'));

mongoose.connect('mongodb+srv://hanoch:hanoch550@cluster0.37kenwy.mongodb.net/userEx?retryWrites=true&w=majority').then (() => {console.log('connect to DB!!');
    }).catch(err =>{
        console.error(err.message);
        })

import clientRout from './routs/clientRout';
app.use('/user', clientRout)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
})