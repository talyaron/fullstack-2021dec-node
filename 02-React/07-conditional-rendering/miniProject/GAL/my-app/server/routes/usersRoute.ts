import express from "express";
const router = express.Router();
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../cont/userCont";

router
  .get("/get-users", getAllUsers)
  .post("/add-user", addUser)
  .patch("/update-user", updateUser)
  .delete("/delete-user", deleteUser);

export const x = 42;

export default router;
