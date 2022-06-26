//lk0przzuFHkF44fc
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'))
import catsRoute from './routes/catsRoute';
mongoose
  .connect(
    "mongodb+srv://tal:Fct4jYbHtkSrSnIa@cluster0.0hzknon.mongodb.net/myDataBase?retryWrites=true&w=majority"
      //  "mongodb+srv://Doritgy:lk0przzuFHkF44fc@cluster0.ruq8e.mongodb.net/myDataBase?retryWrites=true&w=majority"
   )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));



app.use('/cats', catsRoute);


app.listen(port, () => {
  console.log(`excercis: app listening on port ${port}`);
});
