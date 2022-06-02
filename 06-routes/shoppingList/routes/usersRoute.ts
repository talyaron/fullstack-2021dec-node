import express from "express";
const router = express.Router();
import {
  getAllUsers,
  updateUser,
  handleDeleteUser,
  handleAddUser
} from "../cont/usersCont";

//
router
  .get("/get-users", getAllUsers)
  .patch("/update-user", updateUser)
  .delete("/user-delete", handleDeleteUser)
  .post("/user-add", handleAddUser)

export default router;
