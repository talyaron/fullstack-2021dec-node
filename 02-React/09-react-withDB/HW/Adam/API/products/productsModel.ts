import mongoose from "mongoose";

export const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number
    },
    img: {
        type: String,
    },
    published: {
        type: Boolean,
        required: true
    }

})


export const ProductModel = mongoose.model("products", ProductsSchema);