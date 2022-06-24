"use strict";
exports.__esModule = true;
exports.addProduct = exports.getProducts = void 0;
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
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.addProduct = addProduct;
