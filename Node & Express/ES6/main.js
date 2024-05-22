// import sum from './calculator.js'; //file extensioon is must
import power,{add as sum, diff, Test} from './calculator.js'
sum(4,5);
diff(6,12);
console.log("Sum of 3 and 7 = " + sum(3,7));
console.log(power(3,4));

new Test();