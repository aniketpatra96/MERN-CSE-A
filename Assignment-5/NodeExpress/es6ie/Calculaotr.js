// export default function add(x,y){
//     return x+y
// }
export default function power(x,y){
    return Math.pow(x,y)
}

export function add(x,y){
    return x+y
}

export function diff(x,y){
    return x-y
}

class Test{
    constructor(){
        console.log("Test Obj is created");
    }

    display(){
        console.log("Display method is called");
    }
}

// Default Export
// export default add

// Named Export
// export {add, diff}

export {Test}