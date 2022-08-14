import mongoose from 'mongoose';
import Joi from "joi";


const usersSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:Number,
    require:true
}
});

const userModel = mongoose.model("users",usersSchema);

export default userModel;

export const UserValidation = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})