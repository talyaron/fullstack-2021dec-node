
var express = require('express')
var app = express()

const port = 4000;

app.get("/",(req,res)=>{
    res.send("Hi I'm Shira")
});


app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});