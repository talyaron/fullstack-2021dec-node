const express = require('express');
const app = express();
//@ts-ignore
const port = process.env.PORT | 3000;

app.use(express.json());
app.use(express.static("public"));

import storeRoute from './route/bookRoute'
app.use('/', storeRoute)


app.listen(port, ()=>{
    console.log(`listen on port ${port}`)
})

