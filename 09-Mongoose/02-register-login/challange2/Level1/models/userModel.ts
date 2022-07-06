import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }, 
      age:{
        type:Number,
        required:true,
    } ,
      img:{
        type:String,
        required:true,
    }
})

const userModel = mongoose.model('users',userSchema)
export default userModel;

export const UserValidation = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    age: Joi.number().required(),
    img: Joi.string().required(),

})
