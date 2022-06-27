import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  catName: String,
  age: Number,
  imgUrl: String
});

const CatModel = mongoose.model("cats", CatSchema);

export default CatModel;
