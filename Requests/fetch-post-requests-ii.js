    /* lesson URL 
    https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/intermediate-javascript-requests/lessons/requests-ii/exercises/fetch-post-requests-ii
    */
    fetch('https://api-to-call.com/endpoint', {
        method: 'POST',
        body: JSON.stringify({id: '200'})
    }).then(response => {
        if (response.ok) {
            return response.json();
        } throw new Error('Request failed!');
    }, networkError => {console.log(networkError.message)}
    ).then(jsonResponse => {
        return jsonResponse;
    })