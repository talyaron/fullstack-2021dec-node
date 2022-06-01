import express from "express";
const app = express();
const port: number = 4006;

app.use(express.static("public"));
app.use(express.json());
import usersRout from "./route/usersRout";
app.use("/api/users", usersRout);

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });
