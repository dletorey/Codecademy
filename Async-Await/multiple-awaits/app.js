/* Lesson URL
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/asynch-js/lessons/async-await/exercises/multiple-awaits
*/

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
// example
/*
async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
   }
*/
const makeBeans = async () => {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
} 

makeBeans();