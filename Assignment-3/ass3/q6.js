//21BCSE30 | ANIKET PATRA
const numbers = [12, 23, 14, 35, 67, 68, 90, 99, 54, 11];
numbers.forEach((num) => {
  console.log(num);
});
const squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
const randomNumberIndex = Math.floor(Math.random() * numbers.length);
const randomNumber = numbers[randomNumberIndex];
console.log(randomNumber);
const removedArray = numbers.filter((num) => num !== randomNumber);
console.log(removedArray);
numbers.sort();
console.log("The sorted array in ascending order is : ", numbers);
numbers.sort((a, b) => b - a);
console.log("The sorted array in descending order is : ", numbers);
