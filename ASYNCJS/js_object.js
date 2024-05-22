let std = {
    name:"Aniket",
    roll:1,
}

let data = '{"name":"Aniket","age":20}'

//JSON to js
let d = JSON.parse(data)

console.log(d);

// js to JSON
let data2 = JSON.stringify(d)

console.log(data2);