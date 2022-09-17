import express from 'express';
import {onscondPageLoad} from '../Conts/ProfileCont';
const router = express.Router();

router
.post('/get-name',onscondPageLoad)


export default router