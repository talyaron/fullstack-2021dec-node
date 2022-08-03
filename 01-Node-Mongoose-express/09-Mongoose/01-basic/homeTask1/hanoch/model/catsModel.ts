import mongoose from "mongoose";

 const catsSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    }
 });

 const catsModel = mongoose.model('cats', catsSchema);

 export default catsModel;
 