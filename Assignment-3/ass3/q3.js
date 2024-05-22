//21BCSE30 | ANIKET PATRA

function calculate(a, b, callback) {
  return callback(a, b);
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return undefined;
  }
}
console.log(calculate(5, 3, add));
console.log(calculate(5, 3, subtract));
console.log(calculate(5, 3, multiply));
console.log(calculate(6, 3, divide));
