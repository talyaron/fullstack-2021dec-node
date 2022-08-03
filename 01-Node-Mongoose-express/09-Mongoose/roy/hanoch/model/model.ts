import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type:String, required:true}
});

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    owner: {type: String, required: true}
})

export const productModel = mongoose.model("products", productSchema)
export const regModel = mongoose.model('users', regSchema);
