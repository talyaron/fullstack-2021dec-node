import express from "express";
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static('client/build'));
const mysql = require('mysql2');
require("dotenv").config();

import route from './api/route';
app.use('/api/users', route)

const sqlpassword = process.env.SQLPASSWORD;

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: sqlpassword,
  database: "movies",
});


connection.connect((err) => {
    try {
      if (err) throw err;
  
      console.info("🔥 MySQL is connected 🛢 ");
    } catch (error) {
      console.error(error);
    }
  });

  export default connection;


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});



