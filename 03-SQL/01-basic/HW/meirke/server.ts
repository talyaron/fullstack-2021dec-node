import  express, { query }  from "express";
const app = express();
const port = process.env.PORT || 4000;
import mysql from "mysql";

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "meirMeiital080821",
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
    const query = `INSERT INTO movies (movie_id, title, year) VALUES ('8', 'Back to the future', '1986')`;
    
  
    connection.query(query, (err, results, fields) => {
      try {
        res.send({ ok: true });
        if (err) throw err;
  
        console.log(results);
        console.log(fields);
        
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
  
app.post('/api/find-database', (req, res) => {

    connection.query(query, (err, results, fields) =>{
        const query = 'SELECT * FROM movie.movies where year = 1977';

        try {
            console.log(results);
            console.log(fields);
            res.send({ ok: true }); 
        } catch (error) {
            console.error(error);
        }
    })
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
  
  
app.post("/api/add-car", (req, res) => {
    console.log("api/add-car");
  
    const {license, model, year,manufacturer} = req.body;
    if(!year || !license || !model || !manufacturer) throw new Error ('Missing data');
  
    const query = `INSERT INTO cars2 (license, model, year, manufacturer) VALUES ("${license}", "${model}", ${year}, "${manufacturer}");`;
  
    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw err;
  
        console.log(results);
        console.log(fields);
        res.send({ ok: true, message: "car data was added" });
      } catch (error) {
        console.error(error);
        res.send({ ok: false, error: error.message });
      }
    });
});
  
  // api/add-buyer
  
app.post("/api/add-buyer", (req, res) => {
    console.log("api/add-buyer");
  
    const {name, year_of_birth,buyerId} = req.body;
    if( !name || !year_of_birth || !buyerId) throw new Error ('Missing data');
  
    const query = `INSERT INTO buyers (name, year_of_birth, buyerId) VALUES ("${name}", "${year_of_birth}", "${buyerId}");`;
  
    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw err;
  
        console.log(results);
        console.log(fields);
        res.send({ ok: true, message: "buyer data was added" });
      } catch (error) {
        console.error(error);
        res.send({ ok: false, error: error.message });
      }
    });
});
  
  // /api/get-users
  
app.get("/api/get-buyers", (req, res) => {
    console.log("api/get-buyers");
  
  
  
    const query = `SELECT * FROM buyers ORDER BY year_of_birth DESC;`;
  
    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw err;
  
        console.log(results);
        console.log(fields);
        res.send({ ok: true, buyers:results, message: "buyer were quired" });
      } catch (error) {
        console.error(error);
        res.send({ ok: false, error: error.message });
      }
    });
});
  
app.get("/api/get-buyers-by-year", (req, res) => {
    console.log("api/get-buyers");
  
  const {year} = req.query;
  if(!year) throw new Error('year is missing')
  
    const query = `SELECT * FROM buyers WHERE year_of_birth <= ${year} ORDER BY year_of_birth ASC;`;
  
    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw err;
  
        console.log(results);
        console.log(fields);
        res.send({ ok: true, buyers:results, message: "buyer were quired" });
      } catch (error) {
        console.error(error);
        res.send({ ok: false, error: error.message });
      }
    });
});
  
  
app.get("/api/get-youngest-buyer", (req, res) => {
    console.log("api/get-youngest-buyers");
  
  //SELECT id, MAX(rev)
  //FROM YourTable
  //GROUP BY id
  
    const query = `SELECT MAX(year_of_birth) AS Youngest FROM buyers;`;
  
    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw err;
  
        console.log(results);
        console.log(fields);
        res.send({ ok: true, buyer:results, message: "buyer were quired" });
      } catch (error) {
        console.error(error);
        res.send({ ok: false, error: error.message });
      }
    });
});
  
  
  //search-buyers
app.get("/api/search-buyers", (req, res) => {
    console.log("api/get-buyers");
  
    const {name} = req.query;
    if(!name) throw new Error('year is missing')
  
    const query = `SELECT * FROM buyers WHERE name LIKE "%${name}%"`;
  
    connection.query(query, (err, results, fields) => {
      try {
        if (err) throw err;
  
        console.log(results);
        console.log(fields);
        res.send({ ok: true, buyers:results, message: "buyer were quired" });
      } catch (error) {
        console.error(error);
        res.send({ ok: false, error: error.message });
      }
    });
});
  
app.listen(port, () => {
    return console.log(`Server is listening at port:${port} 🔥`);
});
  

