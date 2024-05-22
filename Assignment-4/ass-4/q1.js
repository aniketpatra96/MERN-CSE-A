// 21BCSE30 | ANIKET PATRA

async function division(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num2 === 0) {
                reject("Division by zero is not allowed");
            } else {
                resolve(num1 / num2);
            }
        }, 3000);
    });
}

(async function performDivision() {
    try {
        const result = await division(10, 2);
        console.log("Result of division:", result);
    } catch (error) {
        console.error("Error during division:", error);
    }
})();


(async function performDivisionWithZero() {
    try {
        const result = await division(10, 0);
        console.log("Result of division:", result); 
    } catch (error) {
        console.error("Error during division:", error);
    }
})();
