import express from "express";
const router = express.Router();
import {
  getUsers
} from "../controlers/usersCont";

router.get("/getAllUsers",getUsers)

export default router