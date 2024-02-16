// Higher Order Array Methods
let arr = [1, 2, 3, 4, 5];
// console.log(arr.join(" "));
// arr.push(100)
// arr.pop()
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// 1. forEach
// arr.forEach(function(){})
// arr.forEach((n)=>{
//     console.log(n);
// })
// arr.forEach((n, i)=>{
//     console.log(i+"->"+n);
// })
// arr.forEach(n => console.log(n));
// let newArr = []
// arr.forEach((n)=>{
//     // console.log(n*10);
//     newArr.push(n*10)
// })

// 2.map
// let newArr = arr.map((n)=>{
//     return n*10
// })
// let newArr = arr.map((n)=>(
//      n*10
// ))
// let newArr = arr.map(n => n*10)
// console.log(newArr);

// 3. filter
// let newArr = arr.filter((n)=>{
//     if (n%2!==0)
//         return true
//     else 
//         return false
// })
// let newArr = arr.filter(n => n%2!==0)
// console.log(newArr);

// 4. Reduce
// let sum = 0;
// for(){
//     sum += arr[i]
// }
// reduce((accumulator, currentValue)=>{}, init_value_of_acc)
// let x = arr.reduce((sum, n)=>{
//     sum = sum + n
//     return sum
// }, 0)
// let x = arr.reduce((sum, n)=> sum + n, 0)
// console.log(x);

// let a = [1, 10, 12, 2, 45, 5]
// let large = a[0]
// let largestNumber =a.reduce((l, n)=>{
//     if(l>n)
//         return l
//     else
//         return n
// }, a[0])

// let largestNumber =a.reduce((l, n)=> l > n ? l : n, a[0])
// console.log(largestNumber);

// 5. Sort
// let a = ['python', 'java', 'javascript', 'c', 'php']
let a = [2, 11, 1, 111, 21, 222, 45, 333, 5]
// a.sort((a,b)=>{
//     if(a>b)
//         return 1
//     else if(b>a)
//         return -1
//     else 
//         return 0
// })
a.sort((a,b) => a-b)
console.log(a);