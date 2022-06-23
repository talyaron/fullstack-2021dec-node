import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://tal:Fct4jYbHtkSrSnIa@cluster0.0hzknon.mongodb.net/myDataBase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));

//schema (interface)



//Model = collection



//instace (document)

// const mitzi = new CatModel({name:'mitzi', age:4});

// const kittens = [{name:'shoko', age:3},{name:'dango', age:5},{name:'ketty', age:2}]
//
// mitzi.save().then(()=>{console.log('doc saved')}).catch(err=>console.log(err.message));

// CatModel.create(kittens).then(()=>console.log('docs saved')).catch(err=>console.log(err.message));
//search

// CatModel.find({name:'mitzi', age:2}).then(docs=>console.log(docs)).catch(err=>console.log(err.message));




app.use(express.static('public'))

import CatsRoute from './routes/catsRoute';
app.use('/cats', CatsRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
