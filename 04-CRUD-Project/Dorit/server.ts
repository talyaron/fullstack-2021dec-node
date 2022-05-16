const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Cake {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
  }
  
  let cakes: Array<Cake> = [
    { name: "NoneyCake", 
    ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
     prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"]},
     { name: "vanillaCake", 
     ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
      prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"]},
  ];
//route
app.get("/api/get-cake", (req, res) => {
    try {
        const cakeName = req.body

      res.send({ user: users[2] });
      }, 10000);
    } catch (error) {
      res.send({ error: error.message });
    }

    
    app.put('/api/update-user', (req, res) => {
        try {
          const { userId, age } = req.body;
          if (!userId) throw new Error("userId is required");
          if (!age) throw new Error("age is required");
      
          const userIndex = users.findIndex(user => user.id === userId);
          if (userIndex === -1) throw new Error("user not found");
      
          users[userIndex].age = age;
      
          res.send({ users });
      
        } catch (error) {
          res.send({ error: error.message });
        }
      });

                    



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });