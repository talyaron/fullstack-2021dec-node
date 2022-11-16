import express from "express";
import authRoutes from './routes/authRoute';
import userRoutes from './routes/usersRoute';
import postRoutes from './routes/postsRoute';
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
const port = process.env.PORT || 4020;
// import mysql from "mysql";
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: ")3a09o0vJ73>B+1M",
//   database: "blog",
// });

// connection checking before creating any route:
// app.get("/test", (req, res) => {
//   res.send("Hello from the backend! It works!");
// });



app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port} `);
});
