import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://Juda:UdM8u2wgkNmTUZxn@cluster1.pge6u.mongodb.net/myDB666?retryWrites=true&w=majority')
.then (()=> {console.log('connected to DB')})
.catch(err=> console.log(err));

const CatSchema =new mongoose.Schema({name:String, age:Number})

// Model = collection

const CatModel = mongoose.model('cats',CatSchema)

const mitsi = new CatModel({name:'Mitsi', age:2})

mitsi.save()

app.use(express.json());
app.use(express.static('public'))





app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  