import express from "express";
import mongoose from "mongoose";
import seaAnimalModel from "./model/animalModel" 
const app = express();
const port = 4000;

// mongoose
//   .connect(
//     "mongodb+srv://Bella:xFS7EsTQz8Frw7UL@cluster0.ceb2t.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("Connected to DB!");
//   })
//   .catch((err) => console.log(err));


export let SeaAnimals = [
{
  name: 'Orca',
  Donation: '15$',
  color: 'blue',
}, 
{
  name: 'Starfish',
  Donation: '5$',
  color: 'red',
}, 
{
  name: 'Sea otter',
  Donation: '10$',
  color: 'green',
}]

seaAnimalModel.create(SeaAnimals).then(() => console.log('docs saved')).catch(err => console.log(err.message));

//console.log the sea animals collection
console.log(SeaAnimals);

//search for 'Orca'
seaAnimalModel.find({name:'Orca'}).then(docs=>console.log(docs)).catch(err=>console.log(err.message));





app.use(express.static('public'))

import seaAnimalsRoute from './routes/seaAnimalsRoute';
app.use('/seaAnimals', seaAnimalsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});