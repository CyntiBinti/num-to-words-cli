const { errorMessages } = require("./constants");

function checkIfValidNumber(userInput) {
    if (isNaN(userInput) || typeof userInput !== 'number') {
        throw new Error(errorMessages[0]);
    } 
    else if (userInput < 0 || userInput > 100000 || !Number.isInteger(userInput)) {
        throw new Error(errorMessages[1]);
    }
    else return true;
}

module.exports = { checkIfValidNumber };

