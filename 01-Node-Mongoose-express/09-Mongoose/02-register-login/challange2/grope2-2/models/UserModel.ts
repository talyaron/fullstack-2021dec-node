
import mongoose from "mongoose";
import Joi from "joi";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const ProfileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  url: String,
});

export const ProfileModel = mongoose.model("profiles", ProfileSchema);
export const UserModel = mongoose.model('users', UserSchema);

export const UserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})



