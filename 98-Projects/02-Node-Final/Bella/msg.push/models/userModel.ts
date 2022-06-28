import mongoose from 'mongoose';
import Joi from 'joi';

const UserScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    userId:{
        type: String
    }
});

const UserModel = mongoose.model('users', UserScheme);

export default UserModel;

export const UserVal = Joi.object({
    name:Joi.string().required()
});






