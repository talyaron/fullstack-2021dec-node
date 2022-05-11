const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))


interface Image{
  name:string;
  src:string;
}


const images:Array<Image> = [
  {name:"Shira's Cat", src:"./images/Cat1.jpg"},
  {name:"Bella's Cat", src:"./images/Cat2.jpg"},

];

app.get('/api/image1', (req, res)=>{
  try {
    res.send({image:images[0]});
  }
     
   catch (error) {
      res.send({error:error.message})
  }});

app.get('/api/image2', (req, res)=>{
  try {
    res.send({image:images[1]});
  }
   catch (error) {
      res.send({error:error.message})
  }
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


