const app = require( 'nanoexpress' )();
const cors = require( 'cors' )();

const gen = require( './generators' );
const std = require( './standards' );
const min = require( './minifiers' );

const cfg = require( './config.json' )

app.use( cors );

app.options( '/*', cors )

app.get( '/', async ( req, res ) => {
    return res.sendFile( './root.html' );
} );

app.post( '/minify/css', async ( req, res ) => {
    const minified = await min.css( req.body );
    return res.send( { data: minified } );
} );

app.post( '/minify/js', async ( req, res ) => {
    const minified = await min.js( req.body );
    return res.send( { data: minified } );
} );

app.post( '/minify/json', async ( req, res ) => {
    const minified = await min.json( req.body );
    return res.send( { data: minified } );
} );

app.post( '/minify/html', async ( req, res ) => {
    const minified = await min.html( req.body );
    return res.send( { data: minified } );
} );

app.listen( process.env.PORT || 3000 );