import express from "express";
const router = express.Router();
import {
  updateUser,
  handleDeleteUser,
  handleAddUser
} from "../cont/usersCont";

// 
router
  .patch("/update-user", updateUser)
  .delete("/user-delete", handleDeleteUser)
  .post("/user-add", handleAddUser)

export default router;
