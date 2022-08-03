import express from 'express';
import {getAllDoctors} from '../Conts/DoctorsCont'

const router = express.Router();

router
 .get('/getAllDoctors', getAllDoctors)
 

export default router

