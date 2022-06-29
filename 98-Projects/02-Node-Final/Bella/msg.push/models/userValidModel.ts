import mongoose from 'mongoose';
import Joi from 'joi';

const UserValidSchema = new mongoose.Schema({
    email:
    {
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

const UserValidModel = mongoose.model('valid-users',UserValidSchema);

export default UserValidModel;

export const UserValidation = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})