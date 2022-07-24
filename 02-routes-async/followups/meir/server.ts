const express = require('express');
const app = express();
const port = process.env.PORT || 3100;
app.use(express.static('public'));

interface User{
    name:string;
    age:number;
}

const users:Array<User> = [
    {name:'Yair', age:45, id: "wfwcwdc"},
    {name:'Moshe', age:41},
    {name:'Sagui', age:34}
]

app.get('/api/user1', (req, res) =>{
    try {
        setTimeout(()=>{
            res.send({user:users[0]})
        },10000)
        
    } catch (error) {
        res.send({error:error.message})
    }
})

app.get('/api/user2', (req, res) =>{
    try {
        setTimeout(()=>{
            res.send({user:users[1]})
        },800)
        
    } catch (error) {
        res.send({error:error.message})
    }
})

app.get('/api/user3', (req, res) =>{
    try {
        setTimeout(()=>{
            res.send({user:users[2]})
        },2000)
        
    } catch (error) {
        res.send({error:error.message})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
