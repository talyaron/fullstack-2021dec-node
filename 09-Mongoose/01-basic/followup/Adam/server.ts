import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://adamepel11:QIRgOizBQtdX7RCD@cluster0.5ppyiaf.mongodb.net/?retryWrites=true&w=majority"  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));

//schema (interface)

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  owner:{
    type:String,
    required:true
  }
});

//Model = collection

const CatModel = mongoose.model("cats", CatSchema);

//instace (document)

const mitzi = new CatModel({name:'mitzi', age:4});
//
// mitzi.save().then(()=>{console.log('doc saved')}).catch(err=>console.log(err.message));

//search

CatModel.find({age:{$gt:2}}).then(docs=>console.log(docs)).catch(err=>console.log(err.message));



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
