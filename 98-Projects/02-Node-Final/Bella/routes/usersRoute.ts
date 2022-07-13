import express from "express";
const router = express.Router();
import {
  getUser,
  updateUser,
  handleDeleteUser,
  handleAddUser
} from "../cont/usersCont";

// 
router
  .get("/get-users", getUser)
  .patch("/update-user", updateUser)
  .delete("/user-delete", handleDeleteUser)
  .post("/user-add", handleAddUser)

export default router;
