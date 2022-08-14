import express from "express";
import mongoose from "mongoose";
import CatModel from "./model/catsModel";
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://Shira:1J0gRfeVglRz7j8Z@cluster0.xrmkw.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log('Connected to DB!')})
.catch(err=>console.log(err));

CatModel.find({age:{$gte:2}}).then(docs=>console.log(docs)).catch(err=>console.log(err.message));


  app.use(express.static('public'))


  import CatsRoute from './routes/catsRoute';
  app.use('/cats', CatsRoute);

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  