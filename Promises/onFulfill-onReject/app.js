/* url of workshop
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/javascript-promises/lessons/promises/exercises/onfulfilled-onrejected
*/

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};
const handleFailure = (rejectedValue) => {
    console.log(rejectedValue);
};
checkInventory(order).then(handleSuccess, handleFailure);