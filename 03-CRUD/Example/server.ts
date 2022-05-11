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

app.get("/api/user1", (req, res) => {
  try {
    setTimeout(() => {
      res.send({ user: users[0] });
    }, 500);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/user2", (req, res) => {
  try {
    setTimeout(() => {
      res.send({ user: users[1] });
    }, 5000);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/user3", (req, res) => {
  try {
    setTimeout(() => {
      res.send({ user: users[2] });
    }, 10000);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/get-users", (req, res) => {
  try {
    res.send({ users });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.delete("/api/delete-user", (req, res) => {
  try {
    console.log(req.body);
    const { userId } = req.body;
    console.log(userId);

    const index: number = users.findIndex((user) => user.id === userId);

    if (index === -1) throw new Error("Couldnt find user to delete");

    //delete user from users
    users = users.filter((user) => user.id !== userId);
    setTimeout(() => {
      res.send({ users });
    }, 4000);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
