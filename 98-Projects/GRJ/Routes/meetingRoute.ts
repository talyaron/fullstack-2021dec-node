import express from 'express';
import { getUserMeting } from '../Conts/meetingsCont';
const router = express.Router()

.post('/get-meetings', getUserMeting)
router


export default router