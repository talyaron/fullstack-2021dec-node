"use strict";
exports.__esModule = true;
exports.getProducts = void 0;
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
