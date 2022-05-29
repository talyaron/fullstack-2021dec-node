import express from "express";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());
export interface User{
  name:string;
  userId:string;
}

let users:Array<User>

import userRoute from "./routes/usersRoute"
app.user("/users", userRoute)

// import {someFunction} from './controlers/usersCont'


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});

app.delete("/delete-user"), (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) throw new Error("userId is required");

    users = users.filter(user => user.id !== userId);
    console.log(users)
    res.send({ users });

  } catch (error) {
    res.send({ error: error.message });
  }
};
