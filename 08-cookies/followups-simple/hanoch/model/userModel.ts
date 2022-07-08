import mongoose from "mongoose";
import joi, { string } from 'joi';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const userSchema1 = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
})
const userModel = mongoose.model('user123', userSchema);
export const userModel1 = mongoose.model('user1234', userSchema1)

export default userModel;

export const userValidation = joi.object({
    email:joi.string().required().email(),
    password:joi.string().required()
}) 