import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  gameId: {
    type: String,
    requierd: true,
  },
  player1: {
    type: String,
    requierd: true,
  }, // change type to player when is set
  player2: {
    type: String,
    requierd: true,
  },
  time: {
    type: String,
    requierd: true,
  },
  winnerId: {
    type: String,
    requierd: true,
  },
});

const GameModel = mongoose.model("games", GameSchema);
export default GameModel;
