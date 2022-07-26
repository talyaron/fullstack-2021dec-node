import mongoose from "mongoose";
import Joi from "joi";

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    score: {
      type:String, 
      requierd: false,
    },
    wins: {
      type: Number,
      required: false,
    },
    played: {
      type: Number,
      required: false,
    },
    entrances: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const PlayerModel = mongoose.model("players", PlayerSchema);
export default PlayerModel;

export const UserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

