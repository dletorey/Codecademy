/* Lesson URL
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/asynch-js/lessons/async-await/exercises/writing-async-functions
*/
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

