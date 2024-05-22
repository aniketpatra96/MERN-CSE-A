const products = [
  { id: 101, name: "mouse", price: 300 },
  { id: 102, name: "keyboard", price: 1200 },
  { id: 103, name: "headphone", price: 1000 },
  { id: 104, name: "laptop", price: 63000 },
  { id: 105, name: "mouse", price: 30000 },
];

// display the product details
products.forEach((product) => {
  const { id, name, price } = product;
  console.log(`ID: ${id}, Name: ${name}, Price: $${price}`);
});

// update price by giving fifteen percent discount
// const newProducts = products.map((product) => {
//     product.price = product.price - product.price*0.15;
//     return product;
// });

// update price by giving fifteen percent discount
const newProducts = products.map((product) => ({
  ...product,
  price: product.price - product.price * 0.15,
}));

console.log(newProducts);

//find the product with highest price

const highestPriceProduct = products.reduce(
  (highestprice, product) =>
    highestprice.price > product.price ? highestprice : product,
  products[0]
);
console.log(highestPriceProduct);


//remove headphone
const newProducts2 = products.filter((product) => !(product.id === 103));
console.log(newProducts2);

//Sorting based on price
const sortedProducts = newProducts.sort((a, b) => a.price - b.price);
console.log(sortedProducts);

//Sorting based on price in reverse order
const sortedProducts2 = newProducts.sort((a, b) => b.price - a.price);
console.log(sortedProducts2);

//Sorting based on name
const sortedByName = sortedProducts.sort((a,b)=> a.name.localeCompare(b.name))
console.log(sortedByName);

//sorting based on name in reverse order
const sortedByName2 = sortedProducts.sort((a, b) =>
  b.name.localeCompare(a.name)
);
console.log(sortedByName2);