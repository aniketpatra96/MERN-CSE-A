// CommonJS Default Import 
// const sum = require('./Calculator')
// const difference = require('./Calculator')
// Rename the imports
// const add = require('./Calculator')

// Named Import
// const x = require("./Calculator");
// const {sum, difference} = require("./Calculator");
const {addition, subtraction} = require("./Calculator");


// console.log(sum(3,4));
// console.log(add(30,40));
// console.log(difference(40,30));

// console.log(x.sum(2,3));
// console.log(x.difference(2,3));
// console.log(sum(2,3));
// console.log(difference(2,3));
console.log(addition(2,3));
console.log(subtraction(2,3));