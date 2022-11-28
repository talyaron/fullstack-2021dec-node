import express from 'express';
const port = process.env.PORT || 4000;
import mysql from "mysql";
// const multer = require('multer');
const cors = require('cors');
export const app = express();

app.use(express.static("./client/build"));

app.use(express.json());
app.use(cors());

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./")},
//     filename: function(req, file, cb){
//         const ext = file.mimtype.split("/")[1];
//         cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
        
//     }
// });
// export const upload = multer({
//     storage: storage
// });

// app.use(cors({
//     origin: true,
//     methods: ["GET", "POST"],
//     credentials: true,
// }))

export const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Hanoch-550",
    database: "find-guid",
});

connection.connect((err:any) => {
    try {
        if (err) throw err;
        console.log("mysql connected!!");
        } catch (error) {
        console.error(error);
        }
});



import guidesRouter from './API/router'
app.use('/api-guides', guidesRouter)

app.listen(port, () => {
    return console.log(`Server is listening at port:${port} 🔥`);
  });

