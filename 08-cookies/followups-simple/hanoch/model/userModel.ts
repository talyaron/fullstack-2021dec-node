import mongoose from "mongoose";
import joi from "joi";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  count:Number,
  datesLoggedIn:[Date]
});

const userSchemaEnter = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
  },
});

const userModel = mongoose.model("users", userSchema);
export const userModelEnter = mongoose.model("userEnter", userSchemaEnter);

export default userModel;

export const userValidation = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required(),
});
