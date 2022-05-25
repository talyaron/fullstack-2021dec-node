// @ts-ignore
const express = require("express");
const app = express();
// @ts-ignore
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));


interface userStory{
    name: string;
    text:string;
}

let myStory: Array <userStory> = [];




app.post("/api/story", (req, res) => {
    try {
      const { name, text } = req.body;
      if (!name) throw new Error("Your name is required");
      if (!text) throw new Error("Your story is required");
      const newUserStory = { name, text };
      myStory.push(newUserStory);
      res.send({ myStory });
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.get('/api/getNewStory',(req, res)=>{
    try {
     
       res.send({myStory}) 
       
    } catch (error) {
        res.send({ error: error.message }); 
    }
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  