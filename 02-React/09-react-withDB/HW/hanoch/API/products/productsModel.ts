import mongoose from "mongoose";

export const ProductsSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
        unique: true
    },
    price: {
        type:Number,
        required:true
    },
    imgSrc: String,
    publish:{
        type:Boolean,
        required:true
    }
});

export const ProductModel = mongoose.model('products', ProductsSchema )