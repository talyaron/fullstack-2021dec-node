const express = require('express');
const app = express();
const port = process.env.PORT || 3100;
app.use(express.static('public'));

interface User{
    name:string;
    age:number;
}

const users:Array<User> = [
    {name:'Meir', age:45}
    {name:'Meiital', age:41}
]

app.get('/api/user1', (req, res) =>{
    try {
        res.send({user:users[0]})
    } catch (error) {
        res.send({error:error.message})
    }
})

app.get('/api/user2', (req, res) =>{
    try {
        res.send({user:users[1]})
    } catch (error) {
        res.send({error:error.message})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
