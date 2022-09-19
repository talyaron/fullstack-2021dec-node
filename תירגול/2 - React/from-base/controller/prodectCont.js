const { Product } = require('../model/product')

exports.addNewProduct = async (req, res) => {
    try {
        const { item, price } = req.body
        // console.log(item, price)

        const newProduct = new Product({
            item, price
        })

        newProduct.save()
        res.send(newProduct)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.getProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.body

        const product = await Product.findById(id)

        // console.log(product)

        res.send(product)
    } catch (error) {

    }
}