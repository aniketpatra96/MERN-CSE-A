// Common JS Default Import
// const add = require('./calculator')
// const diff = require("./calculator");
// console.log(add(3,4));
// console.log(diff(3, 4));

//Named Import

// const x = require('./calculator')

// console.log(x.sum(9,8));
// console.log(x.difference(10,13));

const { sum, diff } = require("./calculator");

sum(9,8);
diff(7,6);