//21BCSE30 | ANIKET PATRA
function generateWordLengthArray(inputString) {
  const words = inputString.split(" ");
  const result = words.map((word) => {
    return {
      word: word.replace(/[.,]/g, ""),
      length: word.replace(/[.,]/g, "").length,
    };
  });
  return result;
}

const inputString = "Hello, this is a sample string";
const output = generateWordLengthArray(inputString);
console.log(output);
