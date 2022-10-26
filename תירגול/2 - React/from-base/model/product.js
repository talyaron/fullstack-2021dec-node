const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    item: String,
    price: Number
})

exports.Product = model("Product", ProductSchema)