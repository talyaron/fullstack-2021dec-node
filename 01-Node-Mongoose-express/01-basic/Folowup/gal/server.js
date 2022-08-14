var express = require('express')
var app = express()
const port = 3000;

app.use ()

app.get('/', function (req, res) => {
    res.send('OK')
  });
  
  app.listen(port, function () => {
    console.log('Ready')
  });

console.log('hi');

function multi(a,b){
    return Math.sqrt(a*b)
}

let result= multi (3,5);
console.log(result);


const 
