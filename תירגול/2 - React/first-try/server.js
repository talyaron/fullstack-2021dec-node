const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('client/build'))

app.get('/api/welcome', async (req, res) => {
    res.send(`Hello`)
})

app.listen(6547, () => {
    console.log('http://localhost:6547')
})