import express from 'express';
import {getAllDoctors, createNewDoctor} from '../Conts/DoctorsCont'

const router = express.Router();

router
 .get('/getAllDoctors', getAllDoctors)
 .post('/createNewDoctor', createNewDoctor)
 
export default router

