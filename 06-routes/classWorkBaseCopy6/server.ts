import express from "express";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

interface User{
  username:string;
  id:string;
}
const users:Array<User>=[
  {username:'Moshe', id:'dgdsg'},
  {username:'Miriam,', id:'dgdsdghghg'},
]


import usersRoute from "./routes/userRoute";
app.use("/users", usersRoute);

// import { someFunction } from "./controlers/usersCont";


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});


// app.get('/users/get-all-users',(req, res)=> {
//   try {


//       res.send({ ok: true, users });
//   } catch (error) {
//       console.log(error.error);
//       res.send({ error: error.message });
//   }
// })