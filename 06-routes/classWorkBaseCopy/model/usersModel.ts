import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    phone: String,
  });
  //create a collection
  const User = mongoose.model("users", UserSchema);
  export default User;