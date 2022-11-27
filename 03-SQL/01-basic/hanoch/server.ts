import { info } from "console";
import express from "express";
const app = express();
const port = process.env.PORT || 4000;
import mysql from "mysql";

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Hanoch-550",
  database: "movie",
});

connection.connect((err) =>{
    try {
        if (err) throw err;
        info('mysql connected!!')
} catch (error) {
        console.error(error);
        
}
});

app.post('/api/movies', (req, res) => {
    const query = 'INSERT INTO `movie`.`movies` (`title`, `year`) VALUES ("baba", 2004);'
    connection.query(query, (err, result) => {
        try {
            res.send({ ok: true });
            if (err) throw err;

        } catch (error) {
            console.error(error);
        }
    })
});

app.get('/api/find', (req, res) => {
    const query = 'SELECT * FROM `movie`.`movies` WHERE `year` = 2004'
    connection.query(query, (err, result) => {
        try {
            if (err) throw err;
            res.send({ok: true, result})
        } catch (error) {
            console.error(error);
            
        }
    })
})

app.listen(port, () => {
    return console.log(`Server is listening at port:${port} 🔥`);
  });