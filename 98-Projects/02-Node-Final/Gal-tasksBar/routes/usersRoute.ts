import express from "express";
const router = express.Router();
import {
    handleAddUser,
    // getUser,
    // updateUser,
    // getAllUsers,
    // handleDeleteUser
    getUsers
} from "../cont/usersCont";

//
router
  .get("/get-users", getUsers)
  // .patch("/update-user",updateUser )
  // .delete("/user-delete", handleDeleteUser )
  .post("/add-user", handleAddUser)
//   .post('/get-user',getUser)
  //   .post('/login', login)
  // .get('get-user',getUserByCookie)
  

export default router;
