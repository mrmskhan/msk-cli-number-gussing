#!/usr/bin/env node
import inquirer from "inquirer";
// 1. computer will generate a random number
// 2. user input for gussing number
// 3. compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number: ",
    },
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("congratulation you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
