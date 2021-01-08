// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "userName",
        default: "ncastaldi",
    },
    {
        type: "input",
        message: "Enter the name of the GitHub repo:",
        name: "repoName",
        default: "readme_generator",
    },
    {
        type: "input",
        message: "Enter the title of your project:",
        name: "projectTitle",
        default: "Project1",
    },
    {
        type: "input",
        message: "Enter a description of your project:",
        name: "projectDescription",
        default: "Project1",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    // const welcomeMsg = `Professional README Generator | Created By Nathan Castaldi ©2021`;
    console.log(`Professional README Generator | Created By Nathan Castaldi ©2021
    Follow the prompts to create your readme.md file...`);

    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers.userName);
        });
    // Output to file


}

// Function call to initialize app
init();
