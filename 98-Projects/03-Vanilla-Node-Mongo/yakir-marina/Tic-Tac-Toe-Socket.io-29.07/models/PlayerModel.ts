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
    wins: {
      type: Number,
      requierd: false,
      default: 0,
    },
    score: {
      type: Number,
      requierd: false,
      default: 0,
    },
    lost: {
      type: Number,
      requierd: false,
      default: 0,
    },
    playId: {
      type: Number,
      required: false,
      default: 0,
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
