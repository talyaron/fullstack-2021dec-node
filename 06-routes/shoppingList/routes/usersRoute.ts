import express from "express";
const router = express.Router();
import {
  getAllUsers,
  updateUser,
} from "../cont/usersCont";

router
  .get("/get-users", getAllUsers)
  .patch("/update-user", updateUser)

export default router;

