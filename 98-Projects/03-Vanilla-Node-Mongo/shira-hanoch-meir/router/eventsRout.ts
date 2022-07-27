import express  from "express";
const router = express.Router();

import {addEvents, eventList} from '../controller/eventsCont';

router.post('/add-events', addEvents)
        .get('/get-events', eventList)

export default router