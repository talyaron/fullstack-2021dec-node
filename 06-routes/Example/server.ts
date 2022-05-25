const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface User {
  name: string;
  age: number;
  id: string;
}

let users: Array<User> = [
  { name: "Moshe", age: 23, id: "yjnbcsgs" },
  { name: "Miriam", age: 33, id: "sgfdgdfg" },
  { name: "Aharon", age: 26, id: "jjghkgutyutyu" },
];




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function uid(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
