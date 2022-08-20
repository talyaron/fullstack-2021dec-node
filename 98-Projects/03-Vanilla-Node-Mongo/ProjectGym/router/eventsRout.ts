import express  from "express";
const router = express.Router();

import {addEvents, eventList, addToCart, cartByUser, deleteForCoach, deleteFromCart} from '../controller/eventsCont';

router.post('/add-events', addEvents)
        .get('/get-events', eventList)
        .post('/add-to-cart',addToCart)
        .get('/find-cart-by-user',cartByUser)
        .post('/delete-for-coach', deleteForCoach)
        .post('/delete-from-cart', deleteFromCart)

export default router




