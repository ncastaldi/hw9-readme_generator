// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

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
        message: "Enter your email address:",
        name: "userEmail",
        default: "nathan@castaldi.dev",
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
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installNotes",
    },
    {
        type: "input",
        message: "Enter usage instructions:",
        name: "usageNotes",
    },
    {
        type: "input",
        message: "Enter information for contributors:",
        name: "contribNotes",
    },
    {
        type: "input",
        message: "Enter information about testing:",
        name: "testing",
    },
    {
        type: "list",
        message: "Choose license:",
        choices: ["MIT", "The Unlicense", "No License"],
        name: "licenseSelection",
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// Function to initialize app
function init() {
    console.log(`Professional README Generator | Created By Nathan Castaldi ©2021
Follow the prompts to create your readme.md file`);

    inquirer
        .prompt(questions)
        .then(answers => {
            // Send answers through formatting function
            const formattedData = generateMarkdown(answers);

            // Adapt filename for unique output
            outputFileName = answers.projectTitle + ".md";

            // Send filename and data to be written
            writeToFile(outputFileName, formattedData);
        });
}

// Function call to initialize app
init();
