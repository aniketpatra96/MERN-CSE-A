let products =[
    {id: 101, name: "mouse", price: 300},
    {id: 102, name: "keyboard", price: 1200},
    {id: 103, name: "headphone", price: 1000},
    {id: 104, name: "laptop", price: 63000},
    {id: 105, name: "monitor", price: 30000},
]

// Q1. Display the prodcut details
// products.forEach( product => {
//     let { id, name, price } = product
//     console.log(`${id}->${name}->${price}`);
// })


// Q2.Update price by giving 15% discount
// let newProducts = products.map( product => {
//     product.price = product.price - product.price*0.15
//     return product
// })
// let newProducts = products.map (product => ({...product, price: product.price - product.price*0.15 }))
// console.log(newProducts);

// Q3. Find the product with highest price
// let p = products.reduce((x, prodcut)=>{
//     if(x.price > prodcut.price){
//         return x
//     } else {
//         return prodcut
//     }
// }, products[0])

// let p = products.reduce((x, product)=> x.price>product.price ? x : product)

// console.log(p);

// Q.4 Remove headphone(103)
// let newProducts = products.filter( product => product.id!==103 )
// console.log(newProducts);

//Q.5 Sorting
// products.sort((p1, p2) => p1.price - p2.price)
products.sort((p1, p2) => p2.price - p1.price)
// products.sort( (p1, p2) => p1.name.localeCompare(p2.name))
console.log(products);