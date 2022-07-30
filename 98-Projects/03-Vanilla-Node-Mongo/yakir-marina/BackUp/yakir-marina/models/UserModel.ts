import mongoose from "mongoose";
import Joi from 'joi';

const UserSchema = new mongoose.Schema({
  name: { type: String, requierd: true },
  email: {type:String, requierd: true}, // change type to player when is set
  password: {type:String, requierd: true},
  score: {type:String, requierd: false},
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;

export const UserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});