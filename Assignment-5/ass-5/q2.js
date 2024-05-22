//21BCSE30 | ANIKET PATRA

import { add, subtract, multiply, divide } from "./arithmeticOperations.js";

const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);

try {
  console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
} catch (error) {
  console.error(error.message);
}
