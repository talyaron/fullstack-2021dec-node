"use strict";
exports.__esModule = true;
exports.deleteProduct = exports.addProduct = exports.getProducts = void 0;
var helpers_1 = require("./helpers");
var products = [{ id: 'ettreyer', name: 'test' }];
function getProducts(req, res) {
    try {
        res.send({ products: products });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.getProducts = getProducts;
function addProduct(req, res) {
    try {
        var name = req.body.name;
        if (!name)
            throw new Error('Name of product is require');
        var id = helpers_1["default"]();
        if (!id)
            throw new Error('Id is missing');
        products.push({ name: name, id: id });
        res.send({ products: products });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.addProduct = addProduct;
function deleteProduct(req, res) {
    try {
        var productId_1 = req.body.productId;
        if (!productId_1)
            throw new Error('productId is missing');
        products = products.filter(function (product) { return product.id !== productId_1; });
        res.send({ products: products });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.deleteProduct = deleteProduct;
