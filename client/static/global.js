const CALL = async ( endpoint, data ) => {
    // const server = 'http://localhost:3000/';
    const server = 'https://amoskit.herokuapp.com/';
    const body = typeof data === 'string' ? data : JSON.stringify( data );

    try {
        const response = await fetch( server + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        } );

        const data = await response.json();
        return data;
    } catch ( error ) {
        console.log( error )
    };
};