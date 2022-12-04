import express from "express";
import authRoute from "./routes/authRoute";
import usersRoute from "./routes/usersRoute";
import postsRoute from "./routes/postsRoute";
import likesRoute from "./routes/likesRoute";
import commentsRoute from "./routes/commentsRoute";
import relationshipsRoute from "./routes/commentsRoute";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 4321;
app.use(express.json());
app.use(cookieParser());
app.use(
  "../client/public/upload",
  express.static(path.join(__dirname, "../client/public/upload"))
);

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/likes", likesRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/relationships", relationshipsRoute);

//middlewares
app.use((req, res, next) => {
  //@ts-ignore
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  try {
    //@ts-ignore
    const file = req.file.filename;
    res.send(file);
    //@ts-ignore
    console.log(file, { url: `../client/public/upload/${file}` });
    console.log("file: ", file);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});





app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port} `);
});