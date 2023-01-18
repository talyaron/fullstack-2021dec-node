import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
  });
  //create a collection
  const User = mongoose.model("users", UserSchema);
  export default User;