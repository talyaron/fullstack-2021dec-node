import mongoose from 'mongoose';
import Joi, { number } from 'joi';

const UserSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique: true
    },
    counter:{
        type:number,
        required:false
    },
    average:{
        type:number,
        required:false
    }
})

const UserModel = mongoose.model('users',UserSchema);

export default UserModel;

export const UserValidation = Joi.object({
    id:Joi.string().email().required()
})