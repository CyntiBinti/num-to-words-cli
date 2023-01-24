const { errorMessages } = require("./constants");
const { checkIfValidNumber } = require("./utils");

const numbersToWords = (userInput) => {
    if (checkIfValidNumber(userInput)) {
        console.log(`hello`)
    }
}

// simple test cases
numbersToWords(9);
numbersToWords(99);
numbersToWords(999);
numbersToWords(9999);
numbersToWords(99999);

module.exports = { numbersToWords };