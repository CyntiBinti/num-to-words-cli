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
    // 100 - 999
    const result = [];

    result.push(numberMap[Math.floor(userInput / 100)]);
    result.push(magnitudes[100]);

    if (userInput % 100) {
        result.push(`and ${numbersToWords(userInput % 100)}`);
    }
    return result.join(' ');
}

const convertsThousandsToWords = (userInput) => {
    // 1000 - 9999
    const result = [];

    if (userInput % 1000 === 0) {
        result.push(numberMap[Math.floor(userInput / 1000)]);
        result.push(magnitudes[1000]);
    }
    else {
        result.push(numberMap[Math.floor(userInput / 1000)]);

        if (userInput % 1000) {
            if ((userInput % 1000) < 100) {
                result.push(magnitudes[1000]);
                result.push(`and ${numbersToWords(userInput % 1000)}`)
            }
            else if ((userInput % 1000) < 1000) {
                result.push(`${magnitudes[1000]},`);
                result.push(`${numbersToWords(userInput % 1000)}`)
            }
        }
    }
    return result.join(' ');
}

const convertsTensOfThousandsToWords = (userInput) => {
    // 10,000 - 99,000
    const result = [];

    if (!numberMap[Math.floor(userInput / 1000)]) {
            result.push(numberMap[(Math.floor(userInput / 10000) * 10)]);
            result.push(numberMap[Math.floor(userInput / 10000)]);
            // result.push(magnitudes[1000]);
        }
        else {
            if (userInput % 1000 === 0) {
                result.push(numberMap[Math.floor(userInput / 1000)]);
                result.push(magnitudes[1000]);
            }
            result.push(numberMap[Math.floor(userInput / 1000)]);
        }

        if (userInput % 1000) {
            if ((userInput % 1000) < 100) {
                result.push(magnitudes[1000]);
                result.push(`and ${numbersToWords(userInput % 1000)}`)
            }
            else if ((userInput % 1000) < 1000) {
                result.push(`${magnitudes[1000]},`);
                result.push(`${numbersToWords(userInput % 1000)}`)
            }
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
        else if (userInput < 100000) {
            convertedIntoWords.push(convertsTensOfThousandsToWords(userInput));
        }
        else {
            convertedIntoWords.push(numberMap[Math.floor(userInput / 100000)]);
            convertedIntoWords.push(`${magnitudes[100]},`);
            convertedIntoWords.push(magnitudes[1000]);
        }
    }
    return convertedIntoWords.join(' ');
}

// simple test cases
// console.log(numbersToWords(9));
// console.log(numbersToWords(99))
// console.log(numbersToWords(100));
// console.log(numbersToWords(101));
// console.log(numbersToWords(999));
// console.log(numbersToWords(1000));
// console.log(numbersToWords(1001));
// console.log(numbersToWords(9999));
// console.log(`1000`, numbersToWords(10000));
console.log(`10001`, numbersToWords(10001));
console.log(`19000`, numbersToWords(19000));
console.log(`19001`, numbersToWords(19001));
console.log(`99999`, numbersToWords(99999));
// console.log(`100000`, numbersToWords(100000));


module.exports = { numbersToWords };