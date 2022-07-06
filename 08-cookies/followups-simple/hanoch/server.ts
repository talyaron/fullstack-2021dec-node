import  express  from "express";
const app = express();

app.use('public');

import clientRout from './routs/clientRout';
app.use('/user', clientRout)