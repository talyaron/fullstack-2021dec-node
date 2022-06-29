import express from "express";
const router = express.Router();

import {
    handleAddUser,
    handleUpdateUser,
    handleDelete,
    getUsers,
    getUserByCookie
} from "../cont/usersCont";

//
router
  .patch("/update-user",handleUpdateUser )
    .delete("/user-delete", handleDelete)
    .post("/add-user", handleAddUser)
    .get('/get-users',getUsers)
    .get('/get-userCookie',getUserByCookie)

export default router;
