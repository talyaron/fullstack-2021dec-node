import  express  from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';

const port = 3000;

const app = express();
app.use(express.json());

app.use(cookieParser())

app.use(express.static('public'));

const uri:any = process.env.MONGODB_URI;

mongoose.connect(uri).then(() =>{
    console.log('connect to DB!!');
    }).catch(err =>{
        console.error(err.message);
        })

import clientRout from './routs/clientRout';
app.use('/user', clientRout)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
})