import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:false
    }, 
    description:{
        type:String,
        required:false
    }
})

export const ProductsModel = mongoose.model("products", ProductSchema)