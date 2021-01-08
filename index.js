// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// An array of questions for user input
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

// Function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// Function to initialize app
function init() {
    console.log(`Professional README Generator | Created By Nathan Castaldi ©2021
    Follow the prompts to create your readme.md file...`);

    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile("README.md", JSON.stringify(answers));
        });
}

// Function call to initialize app
init();
