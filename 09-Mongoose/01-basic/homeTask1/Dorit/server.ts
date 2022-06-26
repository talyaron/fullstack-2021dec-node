//bK31clT7HY6mM91S
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'))
import catsRoute from './routes/catsRoute';
mongoose
  .connect(
    //"mongodb+srv://tal:Fct4jYbHtkSrSnIa@cluster0.0hzknon.mongodb.net/myDataBase?retryWrites=true&w=majority"
    "mongodb+srv://doritgy:bK31clT7HY6mM91S@cluster0.grzjg.mongodb.net/myDatabase?retryWrites=true&w=majority"
   )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));



app.use('/cats', catsRoute);


app.listen(port, () => {
  console.log(`excercis: app listening on port ${port}`);
});
