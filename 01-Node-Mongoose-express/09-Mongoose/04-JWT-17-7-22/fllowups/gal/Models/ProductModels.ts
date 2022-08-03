import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ownerId: { type: String, required: true },
});

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;
