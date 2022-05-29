import express from "express";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());
export interface User{
  name:string;
  userId:string;
}

let user:Array<User>

import userRoute from "./routes/usersRoute"
app.get("/users", userRoute)

// import {someFunction} from './controlers/usersCont'


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});

