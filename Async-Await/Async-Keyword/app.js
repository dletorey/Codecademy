/* lesson URL
https://www.codecademy.com/paths/web-development/tracks/webdev-intermediate-javascript/modules/asynch-js/lessons/async-await/exercises/async-function
*/

function withConstructor(num){
    return new Promise((resolve, reject) => {
    if (num === 0){
        resolve('zero');
    } else {
        resolve('not zero');
    }
    })
}

withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// Write your code below:

const withAsync = async (num) => {
    if (num === 0) {
        'zero';
    } else {
        'not zero';
    }
};

// Leave this commented out until step 3:
/*
withAsync(100)
.then((resolveValue) => {
console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
*/