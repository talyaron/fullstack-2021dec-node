import express from "express";
import { addApartment } from "./apartmentCont";


const router = express.Router();

router.post ('/addProduct',addApartment)

export default router;