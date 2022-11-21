import express from 'express';
const port = process.env.PORT || 4000;
import mysql from "mysql";
export const app = express();

app.use(express.json());

export const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Hanoch-550",
    database: "find-guid",
});

connection.connect((err) => {
    try {
        if (err) throw err;
        console.log("mysql connected!!");
        } catch (error) {
        console.error(error);
        }
});

import guidesRouter from './API/router'
app.use('api-guides', guidesRouter)

app.listen(port, () => {
    return console.log(`Server is listening at port:${port} 🔥`);
  });

