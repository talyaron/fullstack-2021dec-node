import express from "express";
const router = express.Router();
import {
    handleAddUser,
    // getUser,
    // updateUser,
    getUserByCookie,
    handleDelete,
    getUsers,
    handleLogin,
    // handleSearchItems
} from "../cont/usersCont";

//
router
  .get("/get-users", getUsers)
  // .patch("/update-user",updateUser )
  .delete("/user-delete", handleDelete)
  .post("/add-user", handleAddUser)
//   .post('/get-user',getUser)
    .post('/login', handleLogin)
  .get('get-user',getUserByCookie)
  // .get('get-user', handleSearchItems)

export default router;
