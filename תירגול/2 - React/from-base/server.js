const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT | 5646

app.use(express.json())
// app.use(express.static('client/build'))


mongoose.connect('mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/FullStackDec2021', () => {
    console.log(`CONNEEEEEECTEEEEEEEED`)
})

const productRout = require('./router/productRout')
app.use('/product', productRout)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})