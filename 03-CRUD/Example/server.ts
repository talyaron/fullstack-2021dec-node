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
    const { userId } = req.body;
    if (!userId) throw new Error("userId is required");

    // const userIndex = users.findIndex(user => user.id === userId);
    // if (userIndex === -1) throw new Error("user not found");

    users = users.filter(user => user.id !== userId);
    console.log(users)
    res.send({ users });

  } catch (error) {
    res.send({ error: error.message });
  }
});

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

app.post('/api/add-user', (req, res) => {
  try {
    const { name, age } = req.body;
    if (!age) throw new Error("age is required");
    if(!name) throw new Error("name is required");

    const user: User = {name, age, id:uid()};

    users.push(user);

    res.send({ users });

  } catch (error) {
    res.send({ error: error.message });
  }
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function uid(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
