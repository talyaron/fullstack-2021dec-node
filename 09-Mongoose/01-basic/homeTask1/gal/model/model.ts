import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Cat = mongoose.model("cats", CatSchema);

export default Cat;
