const cfetch = async ( endpoint, data ) => {
    const server = "http://localhost:3001";
    // const server = "";
    let body = "";

    if ( typeof data === 'string' ) {
        body = data;
        body_type = "text/plain";
    } else {
        body = JSON.stringify( data );
        body_type = "application/json";
    }

    try {
        const response = await fetch( server + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': body_type
            },
            body
        } );

        const data = await response.json();
        return data;
    } catch ( error ) {
        console.log( error )
    };
};