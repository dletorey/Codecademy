/* lesson URL 
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/intermediate-javascript-requests/lessons/requests-ii/exercises/fetch-get-requests-iii
*/

// Information to reach API


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
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
