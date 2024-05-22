console.log("Hello from node");
// const print = console.bind(console);
//ES6 - Features
//1. let  and const - block scope vs function scope
// let a = 10;
// console.log(a);
// const x = 100;

//x=200 Error as we cannot reassign the constant variable
// console.log(x);

// const std = {
//   name: "John",
// };

// console.log(std);

// std.name = "Sam";

// console.log(std);

// {
//   var y = 20;
//   let z = 200;
// }
// console.log(y);
// // console.log(z);

// for (let i = 0; i < 5; i++) {
//   //pass
// }
// console.log(i); cannot access as let has a block level scope

// console.log("Sam is 20 year's old");

//Template Literal
// console.log(`Sam is ${20 + 2} year's old`);

const std = {
  name: "Will",
  age: 22,
  cgpa: 8.9,
  branch: "CSE",
  address: {
    city: "BBSR",
    state: "Odisha",
  },
};

// Destructuring
let { name, age, cgpa, branch } = std;
console.log(name, age, cgpa, branch);

let arr = [10, 12, 14];
let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
//Shallow Copy
//Spread Operator
let brr = [...arr];
console.log(brr);
let frr = [6, 8, 9, ...arr, 90, 78];
console.log(frr);

function test(a, ...b) {
  console.log(a);
  console.log(b);
}

test(1, 2, 3, 4, 5);
let obj = {
  a: 1,
  b: 2,
};

let obj2 = { ...obj, c: 3 };
console.log(obj2);

//Default parameter

function add(a, b, c = 90) {
  console.log(a + b + c);
}

add(10, 20);
add(34, 45, 12);

// class in ES6

class Employee {
  constructor() {
    console.log("Employee object is created");
  }
  display() {
    console.log("Display is called");
  }
}

let emp = new Employee();
emp.display();

//Arrow Function
var tmp = () => 5;
console.log(tmp());

const square = (n) => n * n;
console.log(square(5));

/*
 difference between arrow function and normal function
 - Arrow functions do not have their own this keyword. The this value of the enclosing execution context is used in arrow functions. In other words, it inherits the this value from the
- Arrow functions do not have their own this. They inherit the this from outside. So if you use an arrow function inside another function, it will still refer to that outer this. But
- Arrow functions do not have their own this keyword. The this value of the enclosing execution context is used in arrow functions. In other words, it inherits the this value from
- Arrow functions do not have their own this. They inherit the this from outside. So if you use an arrow function inside another function, it will still refer to the outer function’s
- Arrow functions don’t have their own this. They inherit the this value from the enclosing lexical context.
- Arrow functions can’t be used as constructors because they are not callable objects
- Arrow functions don’t have prototype, they just simply do not have a prototype property.
*/

// function tst(a,b,c){
//     console.log(arguments);
// }

// tst(4,3,6);

const func = (a, b, c) => {
  console.log(arguments);
};

// func(4, 3, 6);

//ES-2020
const student = {
  name: "John",
  address: {
    state: "Odisha",
    geo: {
      latitude: 90,
      longitude: 78,
    },
  },
};
//optional chaining
console.log(student?.address?.geo?.latitude);
