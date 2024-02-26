// let std = {
//     name: "Sam",
//     roll: 1,
//     getName: function(){}
// }

let json = '{"name": "sam", "age": 23}'
// let data = JSON.parse(json)
// console.log(data.age);
let product = {
    name: "Watch",
    price: 3000
}
let jsonData = JSON.stringify(product)
console.log(jsonData);
console.log(typeof(jsonData));