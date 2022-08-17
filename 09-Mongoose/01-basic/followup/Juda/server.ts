import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://Juda:UdM8u2wgkNmTUZxn@cluster1.pge6u.mongodb.net/catsStore?retryWrites=true&w=majority')
  .then(() => { console.log('connected to DB') })
  .catch(err => console.log(err));

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  owner: String,
  color: String,
  sex: String

})

// Model = collection

const CatModel = mongoose.model('cats', CatSchema)

const mitsi = new CatModel({
  name: 'Putsi',
  age: 1,
  sex: 'Female',
  owner: 'Jg',
  color: 'Red'
})


mitsi.save()


CatModel.find({color:'Red'}).then(docs => console.log(docs)).catch(err=>console.log(err.message));

// CatModel.find({ age: 5 }).then(docs => console.log(docs)).catch(err => console.log(err.message))

app.use(express.json());
app.use(express.static('public'))



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
