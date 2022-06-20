const express = require( "express" );
const app = express();
const port = 3000; // default port to listen

app.use(express.json());
import uid,{randomNumber, x} from './control/helpers'

// define a route handler for the default home page
app.use(express.static('public'))

console.log(uid(), randomNumber(200), x)

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

function randNumber(maxNumber:number):number{
    return Math.floor(Math.random()*maxNumber)
}







