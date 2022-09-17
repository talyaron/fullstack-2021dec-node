import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
    },
    imgSrc:{
        type:String
    },
    publish:{
        type:Boolean,
        required:true
    }
})

export const ProductModel = mongoose.model('products',ProductSchema )