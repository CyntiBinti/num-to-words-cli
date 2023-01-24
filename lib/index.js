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

const convertsHundredsToWords = (userInput) => {
    const result = [];

    result.push(numberMap[Math.floor(userInput / 100)]);
    result.push(magnitudes[100]);

    if (userInput % 100) {
        result.push(`and ${numbersToWords(userInput % 100)}`);
    }
    return result.join(' ');
    
}

const convertsThousandsToWords = (userInput) => {
    // 10,000
    const result = [];

    result.push(numberMap[Math.floor(userInput / 1000)]);
    result.push(magnitudes[1000]);

    if (userInput % 1000) {
        result.push(`and ${numbersToWords(userInput % 1000)}`);
    }
    return result.join(' ');
    
}

const convertsTensOfThousandsToWords = (userInput) => {
    // 100,000
    const result = [];

    result.push(numberMap[Math.floor(userInput / 1000)]);
    result.push(magnitudes[1000]);

    if (userInput % 1000) {
        result.push(`and ${numbersToWords(userInput % 1000)}`);
    }
    return result.join(' ');
    
}

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
            convertedIntoWords.push(convertsHundredsToWords(userInput));
        }
        else if (userInput < 10000) {
            convertedIntoWords.push(convertsThousandsToWords(userInput));
        }
        else {
            convertedIntoWords.push(convertsTensOfThousandsToWords(userInput));
        }
    }
    return convertedIntoWords.join(' ');
}

// simple test cases
console.log(numbersToWords(9));
console.log(numbersToWords(99))
console.log(numbersToWords(101));
console.log(numbersToWords(999));
console.log(numbersToWords(1001));
console.log(numbersToWords(9999));
console.log(numbersToWords(10001));
console.log(numbersToWords(99999));


module.exports = { numbersToWords };