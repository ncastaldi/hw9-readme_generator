// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName",
        default: "ncastaldi"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    // const welcomeMsg = `Professional README Generator | Created By Nathan Castaldi ©2021`;
    console.log(`Professional README Generator | Created By Nathan Castaldi ©2021`);

    inquirer.prompt(questions);

    // Output to file
    //writeToFile(x,y)

}

// Function call to initialize app
init();
