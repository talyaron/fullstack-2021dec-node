import express from "express";
const app = express();
const port = process.env.PORT || 4000;
import mysql from "mysql";

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Rdsdyne6",
  database: "movie",
});

connection.connect((err) => {
  try {
    if (err) throw err;

    console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/create-databse", (req, res) => {
  const query = `CREATE DATABASE testDB1;`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);
      console.log(fields);
      res.send({ ok: true });
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.delete("/api/delete-databse", (req, res) => {
  console.log("/api/delete-databse");
  const query = `DROP DATABASE testDB1;`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);
      console.log(fields);
      res.send({ ok: true });
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.post("/api/create-table", (req, res) => {
  console.log("/api/create-table");

  const query = `CREATE TABLE cars2 (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    model varchar(30) NOT NULL,
    manufacturer varchar(40) NOT NULL,
    license varchar(20) UNIQUE NOT NULL,
    year int NOT NULL);`;

  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);
      console.log(fields);
      res.send({ ok: true, message: "table was created" });
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.post("/api/create-row", (req, res) => {
  const { title, year, director } = req.body;
  console.log(title, year, director);
  const query =
    "INSERT INTO `movie`.`movies` (`title`, `year`, `director`) VALUES ('" +
    title +
    "', " +
    year +
    ", '" +
    director +
    "');";

  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;
      res.send({ ok: true, message: "new row created" });
    } catch (error) {
      console.log(err);
      res.status(500).send({ ok: false });
    }
  });
});
app.post("/api/find-by-year", (req, res) => {
  const { year } = req.body;
  console.log(year);
  const query = "SELECT * FROM movie.movies WHERE year='" + year + "';";

  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;
      res.send({ ok: true, message: results });
    } catch (error) {
      console.log(err);
      res.status(500).send({ ok: false });
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
