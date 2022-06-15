const express = require( "express" );
const app = express();
const port = 3000; // default port to listen

// define a route handler for the default home page
app.use(express.static('public'))

// app.get( "/", ( req, res ) => {
//     res.send( `Hello world!` );
// } );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

function randNumber(maxNumber:number):number{
    return Math.floor(Math.random()*maxNumber)
}