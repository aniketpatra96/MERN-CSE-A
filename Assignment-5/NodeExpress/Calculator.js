const PI = 3.14
function sum(a, b){
    return a+b
}
function difference(a,b){
    return a-b
}

// Common JS
// Default Export
// module.exports = sum

// Named Export
// module.exports = {sum: sum, difference: difference}
// module.exports = {sum, difference}
module.exports = {addition: sum, subtraction: difference, PI}