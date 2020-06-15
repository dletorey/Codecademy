/* lesson URL
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/asynch-js/lessons/async-await/exercises/await-promise-all
*/
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')
// Example
/*
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
*/

// Write your code below:
const serveDinnerAgain = async () => {
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
    let vegetable = foodArray[0];
    let starch =  foodArray[1];
    let protein =  foodArray[2];
    let side =  foodArray[3];

    console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}

serveDinnerAgain();