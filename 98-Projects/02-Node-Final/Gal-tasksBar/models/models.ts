export interface user{
    userName: string,
    email: string,
    password: string
};

import { Schema,model } from "mongoose"
import Joi from 'joi';

const UserSchema = new Schema({
    userName: String,
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

const UserModel= model("user", UserSchema)

export default UserModel

// User.find({userName:"galgross24@gmail.com"}).then(docs=>console.log(docs)).catch(err=>console.log(err.message));

export const UserValidation = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})