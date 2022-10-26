import express from "express"
import { getAdmins } from "./adminCont"
const router = express.Router()

router
.post('/getAdmins', getAdmins)
export default router