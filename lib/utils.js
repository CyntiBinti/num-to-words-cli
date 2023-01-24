const { errorMessages } = require("./constants");

function checkIfValidNumber(userInput) {
    if (isNaN(userInput) || typeof userInput !== 'number') {
        console.log(errorMessages[0]);
        return errorMessages[0];
    } 
    else if (userInput < 0 || userInput > 100000 || !Number.isInteger(userInput)) {
        console.log(errorMessages[1]);
        return errorMessages[1];
    }
    else return true;
}

module.exports = { checkIfValidNumber };