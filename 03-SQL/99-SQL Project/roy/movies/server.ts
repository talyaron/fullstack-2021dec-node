import express from "express";
import mysql from "mysql";

const app = express();
const port: number = 4000;

app.use(express.static("./client/build"));
app.use(express.json());

export const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "newuser",
  password: "Rf208789453",
  database: "movies",
});

connection.connect((err) => {
  try {
    if (err) throw err;

    console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
    console.error(error);
  }
})

import usersRoute from '../movies/API/users/usersRoute';
app.use('/api/users', usersRoute);

import homeRoute from '../movies/API/homePage/homeRoute';
app.use('/api/home', homeRoute);




app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
