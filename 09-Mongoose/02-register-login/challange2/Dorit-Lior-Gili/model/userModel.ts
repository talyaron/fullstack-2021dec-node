import mongoose from 'mongoose';
import Joi from 'joi';

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:String,
    job:String,
    address:String,
    profilePic:String,
    ifFirstLogin:Boolean
})

const UserModel = mongoose.model('users', UserSchema);


export default UserModel;


export const UserValidation = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required().min(6).max(12),
    username:Joi.string(),
    job:Joi.string(),
    address:Joi.string(),
    profilePic:Joi.string(),
    ifFirstLogin:Joi.boolean()

})
