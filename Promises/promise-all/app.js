/* lesson url
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/javascript-promises/lessons/promises/exercises/promise-all
*/
const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
let checkSunglasses = checkAvailability('sunglasses', 'Favourite Supply Co.');
let checkPants = checkAvailability('pants', 'Favourite Supply Co.');
let checkBags = checkAvailability('bags', 'Favourite Supply Co.');
Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill)
    .catch(onReject);