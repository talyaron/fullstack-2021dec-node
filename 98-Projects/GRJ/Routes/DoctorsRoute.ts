import express from 'express';
import {getAllDoctors, createNewDoctor, getDoctorsByType} from '../Conts/DoctorsCont'

const router = express.Router();

router
 .get('/getAllDoctors', getAllDoctors)
 .post('/createNewDoctor', createNewDoctor)
 .post('/getDoctorsByType', getDoctorsByType )
 
export default router

