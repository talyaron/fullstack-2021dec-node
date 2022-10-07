import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true,
    unique:true
   },
   price:{
    type:Number,
   },
   imageSrc:{
    type:String
   },
   publish:{
    type:Boolean,
    required:true,
   }
})

export const ProductModel = mongoose.model('products',productSchema)