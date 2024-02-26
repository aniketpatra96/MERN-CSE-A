// console.log("Hello From Node!");

// ES6 - Features

// 1. let & const
//===============
// Declare a variable
// console.log(a);
// var a = 10;
// test() // undefined()

// function test(params) {
// }
// var test=function(){

// }
// console.log("Start");
// let a = 10;
// a = 20;
// let b;
// const x = 100;
// x=200;
// console.log(a);
// console.log(b);

// const std = {
//     name: "sam"
// }
// console.log(std);
// std.name = "Jhon";
// console.log(std);

// {
//     var x = 20;
//     let y = 200;
// }

// console.log(x);
// console.log(y);

// for(var i=0;i<=10; i++){
//     //pass
// }
// for(let i=0;i<=10; i++){
//     //pass
// }
// console.log(i);

// const test = function(){
// }

// name = "Sam"
// age = 20

// console.log(name+" is "+age+" years old");
// console.log(name+' is '+age+' year's old');

//2. Template Literal
// ==================
// console.log(`${name} is ${age} year's old`);
// console.log(`${name} is ${age+10} year's old`);


// const std = {
//     name: "Will",
//     age: 22,
//     cgpa: 8.9,
//     branch: "CSE",
//     address:{
//         city: "BBSR",
//         state: "Odisha",
//     }
// }

// // console.log(std.name);
// // console.log(std.age);

// 3. Destructuring
// let {name, age, cgpa} = std
// let {city, state} = std.address
// console.log(name);
// console.log(age);
// console.log(cgpa);
// console.log(state);

// let arr = [10, 12, 14]
// let [x, y, z] = arr
// console.log(x);
// console.log(y);
// console.log(z);

let arr=[1,2,3,4,5]
// let brr = arr
// console.log(arr);
// console.log(brr);
// brr[3]=300
// console.log(arr);
// console.log(brr);

//4. Spread / Rest
// let b = [...arr]
// console.log(arr);
// console.log(b);
// b[2]=200
// console.log(arr);
// console.log(b);
// let c = [...arr, 10, 20, 30]
// console.log(c);

// let d = [100, 200, 300, ...arr]

// function test(a, ...b){
//     console.log(a);
//     console.log(b);
// }

// test(1,2,3,4,5)

// let obj = {
//     a: 1,
//     b: 2
// }

// let obj2 = {...obj, c: 3}
// console.log(obj2);

// 5. Default valued parameter
// function add(a, b, c=0){
//     console.log(a+b+c);
// }

// add(10, 20)
// add(10, 20, 30)

// 6. class
// class Employee{
//     constructor(){
//         console.log("Emp obj is created");
//     }
//     display(){
//         console.log("Display is called");
//     }
// }

// let emp = new Employee();
// emp.display()

// 7. Arrow Function
// function add(a,b){
//     return a+b
// }

// const add = function(a,b){
//     return a+b
// }

// const add = (a,b) => {
//     return a+b
// }

// const add = (a,b) => (
//      a+b
// )

// const add = (a,b) => a+b
// console.log( add(10, 20))

// const square = n => n*n
// console.log(square(10));

// const std = {
//     name: "Tom",
//     // getName: function(){
//     //     console.log(this.name);
//     // }
//     getName: ()=>{
//         console.log(this.name);
//     }
// }
// std.getName()

// class Test{
//     // constructor = () => {

//     // }
//     func=()=>{

//     }
// }

// let t = new Test()

// function test(a,b,c){
//     console.log(arguments);
// }
// const test = (a,b,c) => {
//     console.log(arguments);
// }

// test(1,2,3)

// ES-2020
// Optional Chaining
// const std ={
//     name: "Sam",
//     adress:{
//         city: "BBSR",
//         geo: {
//             lat: 12,
//             long: 11
//         }
//     }
// }

// console.log(std?.address?.geo?.lat);