//21BCSE30 | ANIKET PATRA
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
function display(arr) {
  // for (let x of arr) {
  //   console.log(x);
  // }
  console.log(arr);
}
fruits.push("strawberry");
display(fruits);
fruits.pop();
display(fruits);
if (fruits.includes("orange")) {
  console.log("Orange is present in fruits");
} else {
  console.log("Orange is not present in fruits");
}
fruits.sort();
display(fruits);
fruits.sort((a, b) => a.localeCompare(b));
display(fruits);
const deepCopy = [...fruits];
console.log(deepCopy);
