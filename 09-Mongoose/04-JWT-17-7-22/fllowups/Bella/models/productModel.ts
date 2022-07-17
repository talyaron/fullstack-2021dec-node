import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    ownerId: String
});

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;