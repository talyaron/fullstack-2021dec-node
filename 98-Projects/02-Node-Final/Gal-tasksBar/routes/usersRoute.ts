import express from "express";
const router = express.Router();

import {
    handleAddUser,
    updateUser,
    // getUserByCookie,
    handleDelete,
    getUsers
    // handleSearchItems
    // handleGetUsers
} from "../cont/usersCont";

//
router
  .patch("/update-user",updateUser )
    .delete("/user-delete", handleDelete)
    .post("/add-user", handleAddUser)
    .get('get-user',getUsers)
    // .get('get-user',getUserByCookie)
  // .get('users-search', handleSearchItems)
  // .get("/get-users", handleGetUsers)

export default router;
