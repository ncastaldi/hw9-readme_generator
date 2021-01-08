// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "No License":
      licenseBadge = "";
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Deconstruct answer object  
  const { userName, repoName, projectTitle, projectDescription, installNotes, licenseSelection } = data;

  // Generate License Badge Link
  const licenseBadge = renderLicenseBadge(licenseSelection);

  // Write captured input to file
  return `${licenseBadge}
  # ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#features)

## Installation
${data.installNotes}

## Usage 

## License

## Features

`;
}

module.exports = generateMarkdown;
