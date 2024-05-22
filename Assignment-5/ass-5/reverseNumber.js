//21BCSE30 | ANIKET PATRA
const reverseNumber = (number) => {
  const reversedNumber = parseFloat(
    number.toString().split("").reverse().join("")
  );
  return reversedNumber * Math.sign(number);
};

export default reverseNumber;
