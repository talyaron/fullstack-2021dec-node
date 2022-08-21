console.log("Connected!");
import express from "express";
import mongoose from "mongoose";
var cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()
app.use(express.static('public'));
app.use(express.json());



import clientRoute from "./routes/clientRoute";
app.use('/clients', clientRoute);

const url = process.env.MONGODB_URI;

mongoose.connect(url).then(()=>{
  console.log("Connected");
}).catch(err=>{
  console.error(err)
});

// mongoose.connect('mongodb+srv://Shira:1J0gRfeVglRz7j8Z@cluster0.xrmkw.mongodb.net/?retryWrites=true&w=majority')
// .then(()=>{console.log('Connected to DB!')})
// .catch(err=>console.log(err));




app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});