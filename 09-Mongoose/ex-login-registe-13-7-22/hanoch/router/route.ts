import express  from "express";
const route = express.Router();

import { register, login } from "../controller/usersCont";
import { products, displayProduct } from "../controller/productsCont";

route.post('/register', register)
    .post('/login', login)
    .post('/products', products)
    .get('/disProducts', displayProduct)

    export default route;