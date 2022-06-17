import express from "express";
const router = express.Router();
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  login,
  getUserByCookie
} from "../controlers/usersCont";

router
  .get("/get-users", getAllUsers)
  .post("/add-user", addUser)
  .patch("/update-user", updateUser)
  .delete("/delete-user", deleteUser)
  .post('/login', login)
  .get('/get-user',getUserByCookie)

export const x = 42;

export default router;
