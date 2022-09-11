import express from 'express';
import {getAllDoctors, createNewDoctor, getDoctorsByType, createDoctorWorkSchedule} from '../Conts/DoctorsCont'

const router = express.Router();

router
 .get('/getAllDoctors', getAllDoctors)
 .post('/createNewDoctor', createNewDoctor)
 .post('/getDoctorsByType', getDoctorsByType )
 .post('/createDoctorWorkSchedule', createDoctorWorkSchedule)


export default router

