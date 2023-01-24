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

// To-do: add if statement to check for floating numbers and commas and reject these also
// To-do: add a throw error statement to catch error better

module.exports = { checkIfValidNumber };

