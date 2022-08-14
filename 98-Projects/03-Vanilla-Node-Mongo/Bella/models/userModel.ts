import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;