// http.js
export default {
    port: 3000,
    fetch ( req ) {
        return new Response( 'Hello World' );
    }
};
// bun run http.js`