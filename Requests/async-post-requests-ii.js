/* lesson URL
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/intermediate-javascript-requests/lessons/requests-ii/exercises/async-post-requests-ii
*/
const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({id:200})
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
};