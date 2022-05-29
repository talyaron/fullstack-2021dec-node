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


app.get('/api/user', (req, res) => {
  try {
      console.log(users);
      res.send({ info: users});

  } catch (error) {
      res.send({ error: error.message })
  }
});



app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
