import express from "express";
import mongoose from "mongoose";
const app = express();
const port: number = 7894;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://doritgy:1pc5GUxw7HGausgi@cluster0.grzjg.mongodb.net/facts"
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.log('At mongoose.connect:')
  console.error(err.message)
});

import factRoute from './routers/factRout'
app.use("/fact", factRoute)



app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
