import express from 'express';
import mongoose, { Schema } from 'mongoose';
const app = express()
const port = 3000


mongoose.connect('mongodb+srv://Shira:1J0gRfeVglRz7j8Z@cluster0.xrmkw.mongodb.net/MyDB?retryWrites=true&w=majority')
.then(()=>{console.log('Connected to DB!')})
.catch(err=>console.log(err));


//schema:
const dogSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
age:Number,
color:String,
owner:String
})

//collection - Model:
const dogModel = mongoose.model("dogs",dogSchema)


const Rexy = new dogModel({name:'Rexy', age:3,color:'white',owner:'Shira'})
const Walf = new dogModel({name:'Walf', age:2,color:'black',owner:'Lihi'})
const Gin = new dogModel({name:'Gin', age:1.5,color:'white',owner:'Dan'})
const Cooper = new dogModel({name:'Cooper', age:6,color:'brown',owner:'Oria'})


Rexy.save().then(()=>{console.log('doc saved')}).catch(err=>console.log(err.message));
Walf.save().then(()=>{console.log('doc saved')}).catch(err=>console.log(err.message));
Gin.save().then(()=>{console.log('doc saved')}).catch(err=>console.log(err.message));
Cooper.save().then(()=>{console.log('doc saved')}).catch(err=>console.log(err.message));


dogModel.find({color:{$eq:'black'}}).then(docs=>console.log(docs)).catch(err=>console.log(err.message));




app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})