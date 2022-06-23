import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 4000;
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



// const july= new Cat ({name:"july", age:10})

import route from "./routes/route";
app.use('/cats',route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  