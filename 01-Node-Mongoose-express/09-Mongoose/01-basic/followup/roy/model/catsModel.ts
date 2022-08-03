import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String,
  image: String,
});


const kittensModel = mongoose.model("kittens", CatSchema);

export default kittensModel;
