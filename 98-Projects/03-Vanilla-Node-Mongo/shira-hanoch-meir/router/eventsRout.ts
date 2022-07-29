import express  from "express";
const router = express.Router();

import {addEvents, eventList, addToCart, cartByUser, deleteForCoach} from '../controller/eventsCont';

router.post('/add-events', addEvents)
        .get('/get-events', eventList)
        .post('/add-to-cart',addToCart)
        .get('/find-cart-by-user',cartByUser)
        .post('/delete-for-coach', deleteForCoach)

export default router




