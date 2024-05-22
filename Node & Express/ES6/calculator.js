function add(x,y){
    return x+y
}

function diff(x,y){
    return x-y
}

export default function power(x,y){
    return Math.pow(x,y)
}


class Test {
    constructor(){
        console.log('Test Obj is created');
    }
    display(){
        console.log('Display method is called');
    }
}

export {Test}

// export default add

export {add, diff};
//ES6 module syntax. It allows you to include multiple values in a single import