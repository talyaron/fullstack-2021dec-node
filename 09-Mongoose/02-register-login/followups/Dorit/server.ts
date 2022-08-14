//bW6nUlcDdX9uUBgR
import express from 'express'
import mongoose from 'mongoose'
const app = express();
const port = 3028;
app.use(express.static('public'))
app.use(express.json());
import userRoutes from './routes/userRoutes';

mongoose
  .connect(
    "mongodb+srv://doritgy:bW6nUlcDdX9uUBgR@cluster0.grzjg.mongodb.net/myDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));
app.use('/users',userRoutes)
app.listen(port, () => {
    console.log(`register/login app listening on port ${port}`);
  });