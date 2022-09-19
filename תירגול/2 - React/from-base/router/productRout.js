const { Router } = require('express')
const { addNewProduct, getProduct, getProductById } = require('../controller/prodectCont')
const router = Router()

router
    .get('/get-data', getProduct)
    .post('/add-new-product', addNewProduct) //type of router (post) => path (/add-new-product) => function (addNewProduct)
    .post('/get-one-product', getProductById)

module.exports = router