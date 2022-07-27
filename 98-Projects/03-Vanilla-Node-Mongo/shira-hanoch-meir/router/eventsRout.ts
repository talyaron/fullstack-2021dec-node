import express  from "express";
const router = express.Router();

import {addEvents, eventList, addToCart,cartByUser} from '../controller/eventsCont';

router.post('/add-events', addEvents)
        .get('/get-events', eventList)
        .post('/add-to-cart',addToCart)
        .get('/find-cart-by-user',cartByUser)

export default router




