import mongoose from "mongoose";

//schema (interface)
const animalSchema = new mongoose.Schema({
    name: String,
    donation: String,
    color: String,
  });
  
  //Model = collection
const seaAnimalModel = mongoose.model("seaAnimals", animalSchema);

export default seaAnimalModel;
