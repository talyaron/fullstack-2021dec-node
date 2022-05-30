"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
// interface Story {
//   name: string;
//   story: string;
// }
// let conStory: Array<Story> = [];
// app.post("/api/onGo_story", (req, res) => {
//   try {
//     const { name, story } = req.body;
//     if (!name) throw new Error("name is required");
//     if (!story) throw new Error("story is required");
//     const tellStory = { name, story };
//     conStory.push(tellStory);
//     res.send({ conStory });
//   } catch (error) {
//     res.send({ error: error.message });
//   }
// });
// app.get('/api/getStory',(req, res)=>{
//     try {
//        res.send({conStory}) 
//     } catch (error) {
//         res.send({ error: error.message }); 
//     }
// })
const storyRoute_1 = __importDefault(require("./route/storyRoute"));
app.use('/api', storyRoute_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
