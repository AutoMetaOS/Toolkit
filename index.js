const express = require( 'express' );
const app = express();
const cors = require( 'cors' )();

const gen = require( './functions/generators' );
const std = require( './functions/standards' );
const min = require( './functions/minifiers' );

app.use( cors );
app.use( express.json() );
app.use( express.text() );
app.use( '/', express.static( './client/build' ) );

app.options( '/*', cors );


app.post( '/minify/:type', async ( req, res ) => {
    const minified = await min[ req.params.type ]( req.body );
    return res.send( { data: minified } );
} );
app.post( '/generate/:type', async ( req, res ) => {
    const generated = await gen[ 'generate' + req.params.type ]( req.body );
    return res.send( { data: generated } );
} );

app.listen( process.env.PORT || 3001, console.log( "Running at 3001" ) );