// 21BCSE30 | ANIKET PATRA

function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    }, 3000);
  });
}

async function checkEvenOrOdd(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve("even");
      } else {
        reject("odd");
      }
    }, 0); 
  });
}

(async function generateAndCheck() {
  try {
    const randomNumber = await generateRandomNumber();
    console.log("Generated number:", randomNumber);
    try {
      let res = await checkEvenOrOdd(randomNumber);
      console.log(`The number is ${res}.`);
    } catch (error) {
      console.log(`The number is ${error}.`);
    }
  } catch (error) {
    console.error("Error generating random number:", error);
  }
})();
