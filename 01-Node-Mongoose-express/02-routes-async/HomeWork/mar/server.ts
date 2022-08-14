const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

interface memes{
    name:string;
    src:string
}

const meme:Array<memes>= [
    {name:'first', src:"https://static.clideo.com/files/content/506/twitter-meme-maker-1.png"},
    {name:'second', src: "https://static.toiimg.com/photo/74674393.cms"}
    {name:'third', src: "https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg"},
   
]

app.get('/meme1', (req, res)=>{
    try {
            res.send({memes:meme[0]});
    } catch (error) {
        res.send({error:error.message})
    }
});

app.get('/meme2', (req, res)=>{
    try {
        res.send({memes:meme[1]});
        
    } catch (error) {
        res.send({error:error.message})
    }
})

app.get('/meme3', (req, res)=>{
    try {
        res.send({memes:meme[2]});
        
    } catch (error) {
        res.send({error:error.message})
    }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})