#!/usr/bin/env node

const process = require('node:process');

const { numbersToWords } = require("../lib/index");
const { checkIfValidNumber } = require("../lib/utils");

const argument = process.argv;

// This is a self invoking function
(() => {
  const userInput = Number(argument[2]);

  try {
    if (checkIfValidNumber(userInput)) {
        console.log(numbersToWords(userInput)); 
      }

  } catch (error) {
    console.error(error);
    process.exit = 1;
  }
  
})();