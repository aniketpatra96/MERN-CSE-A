// function myPromise(){
//     //constructor takes a callback function
//     let promise = new Promise((resolve,reject) =>{
//         //both resolve and reject are callback functions that are executed by the Promise itself
//         setTimeout(() => {
//             // resolve("Promise is Resolved");
//             reject("Promise is Rejected")
//         },1000)
//     })
//     return promise
// }

// let res = myPromise()
// console.log(res);

// //then-catch latch/block

// res
//     .then((data) => console.log("Result: "+data))
//     .catch(err => console.log(err))

// function division(a,b){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(b===0){
//                 reject("Division not Posibble")
//             }else{
//                 resolve(a/b)
//             }
//         },3000)
//     })
// }

// division(3,2)
//     .then((result) => console.log("Result: "+result))
//     .catch((err) => console.log("Error : "+err))