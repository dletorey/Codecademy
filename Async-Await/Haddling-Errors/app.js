const cookBeanSouffle = require('./library.js');

// Write your code below:
// Example 
/*
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
*/

const hostDinnerParty = async () => {
    try {
        let meal = await cookBeanSouffle();
        console.log(`${meal} is served!`);
    }
    catch(error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
};

hostDinnerParty();
