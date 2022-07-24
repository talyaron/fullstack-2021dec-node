import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, requierd: true },
  email: {type:String, requierd: true}, // change type to player when is set
  password: {type:String, requierd: true},
  score: {type:String, requierd: false},
});

export default UserSchema;
