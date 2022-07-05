"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
// import {getPost} from "../controllers/recipeCont";
var postCont_1 = require("../controllers/postCont");
router
    .get("/get-posts", postCont_1.getPosts)
    .post("/add-post", postCont_1.addPost)["delete"]("/delete-post", postCont_1.deletePost)
    .patch("/update-post", postCont_1.updatePost);
// .patch("/edit-post",editPost)
exports["default"] = router;
