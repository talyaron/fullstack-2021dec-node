import  express  from "express";
import mongoose from "mongoose";

const app = express()
const port = 3000;
 
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb+srv://hanoch:Wih5HKHggXATg2Bc@cluster0.37kenwy.mongodb.net/catsex?retryWrites=true&w=majority')
.then(()=>{
    console.log("connect to DB");
    
}).catch((err)=> console.log(err))

import catsRout from './routs/catsRout';
app.use('/cat', catsRout)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
} )