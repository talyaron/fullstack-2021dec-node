import express from "express";
import mongoose from "mongoose";
import Cat from "./model/model";
const app = express();
const port = 3001;
app.use(express.static('public'))
app.use(express.json());

mongoose
.connect(
    "mongodb+srv://galgross24:aSRzXFlQWeLivtFt@cluster0.e2n3k.mongodb.net/test"
)
.then(()=>{
    console.log("connect to DB");
})
.catch((err)=>console.error(err));



const cats= [{name:"july", age:10}, {name:"bell",Age:12}];
Cat.create(cats).then(()=>console.log('DATA saved')).catch(err=>console.log(err.message));

import route from "./routes/route";
app.use('/cats',route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  