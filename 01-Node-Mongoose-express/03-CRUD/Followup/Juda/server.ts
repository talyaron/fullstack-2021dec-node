const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.static("public"));

interface User {
  name: string,
  age: number,
  id: string
}

const users: Array<User> = [
  { name: 'juda', age: 28, id: 'dfgdf' },
  { name: 'dudu', age: 45, id: 'mdfgdf' },
  { name: 'eli', age: 88, id: '4thrh4' },
]



app.get('/api/user1', (req, res) => {
  try {
    setTimeout(() => {
      res.send({ user: users[0] })
    }, 500);

  } catch (error) {
    res.send({ error: error.message });
  }
})


app.get('/api/user2', (req, res) => {
  try {
    setTimeout(() => {
      res.send({ user: users[1] })
    }, 500)
  } catch (error) {
    res.send({ error: error.message });
  }
})

app.get("/api/getUsers", (req, res) => {
  try {
    res.send({ users });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.delete('/api/delete-user', (req, res) => {
  try {

    const { userId } = req.body
    console.log(userId)
    const index = users.findIndex(user => user.id === userId)
    console.log(index)
    users.splice(index,1);
   
    res.send({ users });

    if (index === -1) throw new Error('couldnt find user to delete')

  } catch (error) {
    res.send({ error: error.message });
  }
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

