import mongoose from 'mongoose';
import Joi from "joi";
const UserSchema = new mongoose.Schema({

    email: String,
    password: String
})

const UserModel = mongoose.model('user', UserSchema);
export default UserModel

const UserValidation = Joi.object({
   email:Joi.string().email().required(),
   password:Joi.string().required
   
})