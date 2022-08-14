// import express from "express";
// const router = express.Router();

import { Router } from 'express'
const router = Router();
import {
    getTasks,
    saveTask
} from '../controllers/task';

router
    .get('/get-all-tasks', getTasks)
    .post('/save-task', saveTask)

export default router

