import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = 3000


mongoose.connect('mongodb+srv://tal:Fct4jYbHtkSrSnIa@cluster0.0hzknon.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log('Connected to DB!')})
.catch(err=>console.log(err));

// const Cat = mongoose.model('Cat', { name: String });

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})