// function myPromise(){
//     let promise = new Promise(()=>{})
//     return promise
// }
// console.log("Start");
// function myPromise(){
//     let promise = new Promise((resolve, reject)=>{
//         resolve("Promise is resolved")
//         // setTimeout(()=>{
//         //     // reject("Promise is rejected")
//         // }, 1000)
//     })
//     return promise
// }
// setTimeout(()=>{
//     console.log("Timer Out");
// }, 0)
// console.log("Between");
// let res = myPromise()
// console.log(res);
// then-catch latch/block
// res
//     .then((data)=>console.log("Result: "+data))
//     .catch((err)=>console.log(err))


function division(a,b){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(b===0){
                reject("Divisor can not be zero");
            } else {
                resolve(a/b);
            }
        }, 3000)
    })
}
// setTimeout(() => {
//     console.log("Timer Out");
// }, 1000);
console.log("Some other Task 1");
division(3,2)
    .then((result)=>console.log("Result: "+result))
    .catch((error)=>console.log("Error: "+error))
console.log("Some other Task 2");
console.log("end");