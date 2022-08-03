const express = require( "express" );
const app = express();
const port = 3000; // default port to listen

app.use(express.json());
import uid,{randomNumber} from './control/helpers'

// define a route handler for the default home page
app.use(express.static('public'))

console.log(uid(), randNumber(200));

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

import productsRouter from './routes/productsRoute';
app.use('/products',productsRouter);

function randNumber(maxNumber:number):number{
    return Math.floor(Math.random()*maxNumber)
}







