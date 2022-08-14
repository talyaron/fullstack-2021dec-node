import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color:String,
  src:String
});

const CatModel = mongoose.model("cats", CatSchema);

export default CatModel;