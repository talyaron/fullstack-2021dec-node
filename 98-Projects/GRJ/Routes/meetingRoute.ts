import express from 'express';
import { getDoctorMeeting, getUserMeeting, handleDelete } from '../Conts/meetingsCont';
const router = express.Router()

.post('/get-meetings', getUserMeeting)
.delete('/delete-meetings', handleDelete)
.post('/Doc-meetings', getDoctorMeeting)
router


export default router