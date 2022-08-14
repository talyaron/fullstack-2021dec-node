import mongoose from "mongoose";
// import mongoose, { Schema }  from "mongoose";

const CatSchema = new mongoose.Schema({
    name:String,
    age:Number,
    color:String,
    image:String
});

const CatModel = mongoose.model("cats",CatSchema);

export default CatModel;