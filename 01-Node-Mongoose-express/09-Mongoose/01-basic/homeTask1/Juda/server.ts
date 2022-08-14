import mongoose from 'mongoose';
import express from "express";

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


mongoose.connect('mongodb+srv://Juda:UdM8u2wgkNmTUZxn@cluster1.pge6u.mongodb.net/JudasCats?retryWrites=true&w=majority')
  .then(() => { console.log('connect to DB') })
  .catch(err => console.log(err));

import router from './routes/routes';
app.use('/cats', router)
