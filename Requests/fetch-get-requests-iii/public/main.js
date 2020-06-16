/* lesson URL 
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/intermediate-javascript-requests/lessons/requests-ii/exercises/fetch-get-requests-iii
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/intermediate-javascript-requests/lessons/requests-ii/exercises/fetch-get-requests-iv
*/

// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint =`${url}${queryParams}${wordQuery}`;
    fetch(endpoint, {cache: 'no-cache'}).then(response => {
        if (response.ok) {
           return response.json();
        } throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        renderRawResponse(jsonResponse);
    }) 
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
