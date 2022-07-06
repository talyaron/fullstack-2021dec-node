import express from "express";
var cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser());
const port: number | string = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

import userRouter from './Route/userRoute';
app.use('/users',userRouter)

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });