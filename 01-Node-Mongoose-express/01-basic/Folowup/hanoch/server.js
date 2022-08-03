var express = require("express");
var app = express();
const port = 4000;

// console.log('hi')
// function multy(a, b){
//     return Math.sqrt(a*b)
// }
// let x = multy(5,5)
// console.log(x)
app.use(express.static('public')) 

app.listen(port, ()=>{
    console.log(`server listen on port ${port}`)
})