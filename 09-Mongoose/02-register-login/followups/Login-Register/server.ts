console.log("Connected!");
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 4006;
app.use(express.static('public'));
app.use(express.json());

import usersRoutes from "./routes/usersRoute";
app.use('/users', usersRoutes);


mongoose.connect(
  "mongodb+srv://tal:AKbbAsrRrMqPCrMX@cluster0.0hzknon.mongodb.net/test?retryWrites=true&w=majority"
).then(()=>{
  console.log("Connected to DB!");
}).catch(err=>{
  console.error(err)
});



app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});

