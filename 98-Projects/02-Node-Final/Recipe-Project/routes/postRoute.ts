import express from 'express'
const router = express.Router();
// import {getPost} from "../controllers/recipeCont";
import {getPosts,addPost, deletePost,updatePost} from "../controllers/postCont";

router
.get("/get-posts",getPosts)
.post("/add-post",addPost)
.delete("/delete-post",deletePost)
.patch("/update-post",updatePost)
// .patch("/edit-post",editPost)






export default router;
