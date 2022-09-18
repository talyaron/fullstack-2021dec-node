import mongoose from "mongoose";
import { UserCart } from "../../client/src/features/user/userCart";

export const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cart:{
        type:UserCart,
        required:true
    }
})

export const UserModel = mongoose.model("users", UserSchema)