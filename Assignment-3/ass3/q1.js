//21BCSE30 | ANIKET PATRA
const isPrime = (n) => {
  if (n === 1 || n === 0) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
};
let n = 5;
if (isPrime(n)) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}
