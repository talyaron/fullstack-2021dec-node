// @ts-ignore
const express = require("express");
const app = express();
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
      const newUserStory = { name, text };
      myStory.push(newUserStory);
      res.send({ myStory });
      console.log(myStory)
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.get('/api/getNewStory',(req, res)=>{
     try {
       res.send({myStory}) 
    }
      catch (error) {
        res.send({ error: error.message }); 
    }  
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  