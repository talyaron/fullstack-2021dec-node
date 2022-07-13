"use strict";
exports.__esModule = true;
exports.updatePost = exports.deletePost = exports.addPost = exports.getPosts = void 0;
var helpers_1 = require("./helpers");
var posts = [{ title: 'Bread',
        ingredients: 'flour,water,oil', owner: 'Shira', id: 'jbhvc', instructions: '1:mix all ingredients, 2:knead,3:bloat...',
        imageSrc: 'bla' }];
function getPosts(req, res) {
    try {
        res.send({ posts: posts });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.getPosts = getPosts;
function addPost(req, res) {
    try {
        var title = req.body.title;
        if (!title)
            throw new Error('no title');
        var id = helpers_1["default"]();
        if (!id)
            throw new Error('no id');
        var owner = req.body.owner;
        if (!owner)
            throw new Error('no owner');
        var ingredients = req.body.ingredients;
        if (!ingredients)
            throw new Error('no ingredients');
        var instructions = req.body.instructions;
        if (!instructions)
            throw new Error('no instructions');
        var imageSrc = req.body.imageSrc;
        if (!imageSrc)
            throw new Error('no imageSrc');
        posts.push({ title: title, id: id, ingredients: ingredients, owner: owner, instructions: instructions, imageSrc: imageSrc });
        res.send({ posts: posts });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.addPost = addPost;
function deletePost(req, res) {
    try {
        var postId_1 = req.body.postId;
        if (!postId_1)
            throw new Error('post Id is missing');
        console.log(postId_1);
        posts = posts.filter(function (recipe) { return recipe.id !== postId_1; });
        res.send({ posts: posts });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    try {
        var _a = req.body, newTitle = _a.newTitle, id_1 = _a.id;
        if (!newTitle)
            throw new Error('No title');
        if (!id_1)
            throw new Error('No id');
        var index = posts.findIndex(function (post) { return post.id === id_1; });
        if (index === -1)
            throw new Error("No id with id: " + id_1 + " in recipes ");
        posts[index].title = newTitle;
        res.send({ posts: posts });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.updatePost = updatePost;
//   export function editPost(req,res){
//     try {
//       const {newTitle,id} = req.body;
//       if (!newTitle) throw new Error ('No title')
//       if (!id) throw new Error ('No id')
//       const index = posts.findIndex(post=>post.id === id);
//       if (index ===-1) throw new Error (`No id with id: ${id} in posts `)
//       posts[index].title = newTitle;
//       res.send({posts});
//     } 
//     catch (error) {
//       console.error(error);
//       res.send({error:error.message}); 
//     }
//   }
