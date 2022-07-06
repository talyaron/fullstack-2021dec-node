const express = require( "express" );
const app = express();
const port = 3000; // default port to listen;

app.use(express.json());
import uid,{randomNumber, x} from './control/helpers'

// define a route handler for the default hnpmome page
app.use(express.static('public'))

console.log(uid(), randomNumber(200), x);

import productsRouter from './routes/productsRoute';
app.use('/products',productsRouter);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );




function randNumber(maxNumber:number):number{
    return Math.floor(Math.random()*maxNumber)
}