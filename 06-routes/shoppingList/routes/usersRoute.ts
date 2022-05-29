import express from "express";
const router = express.Router();
import { User } from "../model/userModel";
// {
//   addUser,
//   deleteUser,
// } from "../controlers/usersCont";

import {getAllUsers,addUser,deleteUser}
  .post("/add-user", addUser)
  .delete("/delete-user", deleteUser)
  .get('/api/user',getAllUsers)
export default router;

