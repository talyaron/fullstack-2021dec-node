import express from 'express';
import {onscondPageLoad} from '../Conts/ProfileCont';
const router = express.Router();

router
.get('/get-name',onscondPageLoad)


export default router