import mongoose from "mongoose";
import { ProductSchema } from "../Products/productModel";
export const UserCartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:{
        type:Array<typeof ProductSchema>,
        required:false
    }
})

export const UserCartsModel = mongoose.model("userCarts", UserCartSchema)