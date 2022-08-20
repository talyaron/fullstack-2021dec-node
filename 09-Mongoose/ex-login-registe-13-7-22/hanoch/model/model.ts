import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type:String, required:true}
});

const productSchema = new mongoose.Schema({
    product: {type: String, required: true},
    price:{type: Number, required: true },
    user:String
})

export const productModel = mongoose.model("products", productSchema)
export const regModel = mongoose.model('users', regSchema);
