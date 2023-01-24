const { checkIfValidNumber } = require("./utils");
const { numberMap, magnitudes } = require("./constants")


const convertsTensToWords = (userInput) => {
    const result = [];

    result.push(numberMap[Math.floor(userInput / 10) * 10]);

    if (userInput % 10) {
        result.push(numberMap[userInput % 10]);
    }
    return result.join('-');
}

// const convertsHundredsToWords = (userInput) => {
//     const result = [];

//     result.push(numberMap[Math.floor(userInput / 100)] + magnitudes[100]);

//     if (userInput % 100) {
//         result.push(convertsTensToWords(userInput % 100));
//     }
//     return result.join(' and ');
// }

const numbersToWords = (userInput) => {

    const convertedIntoWords = [];

    if (checkIfValidNumber(userInput)) {
        if (userInput < 20) {
            convertedIntoWords.push(numberMap[userInput])
        }
        else if (userInput < 100) {
            convertedIntoWords.push(convertsTensToWords(userInput));
        }
        else if (userInput < 1000) {
            convertedIntoWords.push(numberMap[Math.floor(userInput / 100)]);
            convertedIntoWords.push(magnitudes[100]);

            if (userInput % 100) {
                convertedIntoWords.push(`and ${numbersToWords(userInput % 100)}`);
            }
            
        }
    }
    return convertedIntoWords.join(' ');
}

// simple test cases
console.log(numbersToWords(9));
console.log(numbersToWords(99))
console.log(numbersToWords(999));
console.log(numbersToWords(101));
// console.log(numbersToWords(9999));
// console.log(numbersToWords(99999));


module.exports = { numbersToWords };