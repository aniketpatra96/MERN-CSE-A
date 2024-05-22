function sum(a,b){
    return a+b
}

function difference(a,b){
    return a-b
}

const PI = 3.14

// Common JS 
// Default Export
//module.exports = sum
//Named Exports
module.exports = {sum, difference, PI}