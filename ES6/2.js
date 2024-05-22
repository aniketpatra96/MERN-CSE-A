// Higher Order Array Methods

let arr = [1, 2, 3, 4, 5];
console.log(arr.join(",")); //Join array elements with a comma

//1.forEach
arr.forEach((n) => console.log(n));
arr.forEach((n, i) => console.log(`${i}: ${n}`)); //first parameter is the element and second parameter is the index of the element in the array

//2.map
const newArr = arr.map((n) => n * 10);
console.log(newArr);

const newArr2 = arr.map((n, i) => {
  console.log(`${i} : ${n * 10}`);
  return n * 10;
});
console.log(newArr2);
// filter  method returns an array of the elements that pass the test implemented by the provided function
const oddNumbers = arr.filter((n) => n % 2 !== 0);
//this calback function  returns true or false for each element in the array
console.log(oddNumbers);
const evenNumbers = arr.filter((n) => n % 2 === 0);
console.log(evenNumbers);

// reduce  is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
//reduce is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
//reduce is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//3.reduce
//reduce((accumulator,currentValue)=>{},initial_value_of_accumulator)
const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue
); //reduces the array to a single value
console.log(sum);
const product = arr.reduce(
  (accumulator, currentValue) => accumulator * currentValue
); //reduces the array to a single value
console.log(product);

const largestNumber = arr.reduce((l, n) => (l > n ? l : n), arr[0]);
console.log(largestNumber);

//sort()  - sorts the elements of an array in place and returns the array
// sort() takes in optional compare function as argument which determines the way how values are sorted
//compare function should return negative if x is less than y, zero if x is equal to y , positive if x is greater than y
//compare function should return negative if x is less than y, zero if x is equal to y , positive if x is greater than y
//compare function should return negative value if x is less than y, zero if x is equal to y , positive value if x is greater than y
//compare function should return negative if x is less than y, zero if x is equal to y , positive if x is greater than y
const array = [1, 222, 333, 111, 78, 90, 45, 78, 6, 1];
array.sort((a, b) => a - b);
console.log(array);
