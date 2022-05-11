const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static('public'))

interface meme{
    name:string,
    src:string
}

const memes:Array<meme> = [
    {name:"meme1" ,src:"./imgs/img1.png"},
    {name:"meme2",src:"./imgs/img2.png"},
    {name:"meme3",src:"./imgs/img3.png"},
    {name:"meme4" ,src:"./imgs/img4.png"},
    {name:"meme5",src:"./imgs/img5.png"},
    {name:"meme6",src:"./imgs/img6.png"},
    {name:"meme7",src:"./imgs/img7.png"},
    {name:"meme8",src:"./imgs/img8.png"},
    {name:"meme9",src:"./imgs/img9.png"},
    {name:"meme10",src:"./imgs/img10.png"}
]

// app.get('/api/meme1', (req, res)=>{
//     try {
//         setTimeout(()=>{
//             res.send({meme:memes[0]});
//         },100)
       
//     } catch (error) {
//         res.send({error:error.message})
//     }
// });

// app.get('/api/meme2', (req, res)=>{
//     try {
//         setTimeout(()=>{res.send({meme:memes[1]})
//     },100)
        
//     } catch (error) {
//         res.send({error:error.message})
//     }
// })

// app.get('/api/meme3', (req, res)=>{
//     try {
//         setTimeout(()=>{
//             res.send({meme:memes[2]})
//         },100 )
        
//     } catch (error) {
//         res.send({error:error.message})
//     }
// })

app.get('/api/memeSurprise', (req, res)=>{
    try {
        setTimeout(()=>{
            res.send({meme:memes[Math.floor(Math.random()*memes.length)]})
        },100 )
        
    } catch (error) {
        res.send({error:error.message})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
  
  