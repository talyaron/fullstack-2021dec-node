import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    phone: String,
  });
  //create a collection
  const User = mongoose.model("User", UserSchema);
  export default User;