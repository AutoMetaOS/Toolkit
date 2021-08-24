const fs = require( 'fs' );
const path = require( 'path' );
const app = require( 'nanoexpress' )();

const gen = require( './generators' );
const std = require( './standards' );
const min = require( './minifiers' );

app.get( '/minify/css', async ( req, res ) => {
    const minified = await min.css( req.body );
    return res.send( { data: minified } );
} );

app.get( '/minify/js', async ( req, res ) => {
    const minified = await min.js( req.body );
    return res.send( { data: minified } );
} );

app.get( '/minify/json', async ( req, res ) => {
    const minified = await min.json( req.body );
    return res.send( { data: minified } );
} );

app.get( '/minify/html', async ( req, res ) => {
    const minified = await min.html( req.body );
    return res.send( { data: minified } );
} );

app.listen( 3000 );