const { errorMessages } = require("./constants");

function checkIfValidNumber(userInput) {
    if (typeof userInput !== 'number') {
        console.log(errorMessages[0]);
        return errorMessages[0];
    } 
    else if (userInput < 0 || userInput > 100000) {
        console.log(errorMessages[1]);
        return errorMessages[1];
    }
    else return true;
}

module.exports = { checkIfValidNumber };

