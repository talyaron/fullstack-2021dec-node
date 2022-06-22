"use strict";
exports.__esModule = true;
exports.getProduct = void 0;
function getProduct(req, renderProducts) {
    try {
        res.send({ products: products });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.getProduct = getProduct;
