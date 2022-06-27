import express  from "express";
import mongoose from "mongoose";
const port = 3000;

const app = express();
app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb+srv://hanoch:m3QQqQsCPlSECTbj@cluster0.37kenwy.mongodb.net/userDB?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));

  import userRout from './routs/userRout';
  app.use('/user', userRout);

  app.listen(port, () => {
console.log(`listening on port ${port}`)
  })