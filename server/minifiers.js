const minify = require( '@node-minify/core' );
const htmlMinifier = require( '@node-minify/html-minifier' );
const babelMinify = require( '@node-minify/babel-minify' );
const sqwish = require( '@node-minify/sqwish' );
const jsonminify = require( '@node-minify/jsonminify' );

// Async/Await
async function async_minify ( compressor, content, type ) {
    const min = await minify( {
        compressor,
        content,
        type,
        callback: function ( err, min ) { console.log( min ); }
    } );
    return min;
}

module.exports = {
    css: async function ( css ) {
        const minified = await async_minify( sqwish, css, 'css' );
        return minified;
    },
    js: async function ( js ) {
        const minified = await async_minify( babelMinify, js, 'js' );
        return minified;
    },
    json: async function ( json ) {
        const minified = await async_minify( jsonminify, json, 'json' );
        return minified;
    },
    html: async function ( html ) {
        const minified = await async_minify( htmlMinifier, html, 'html' );
        return minified;
    }
}