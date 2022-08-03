import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  owner: {
    type: String,
    required: false,
  },
});

const CatModel = mongoose.model("cats", CatSchema);

export default CatModel;
