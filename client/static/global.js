
const CALL = async ( endpoint, body ) => {
    const server = 'http://localhost:3000/';

    try {
        const response = await fetch( server + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        } );

        const data = await response.json();
        console.log( data );
    } catch ( error ) {
        console.log( error )
    }
}

CALL()