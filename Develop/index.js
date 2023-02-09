
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user
inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide contribution guidelines.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please provide test instructions.",
    name: "test",
  },
  {
    type: "list",
    message: "Please choose a license.",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    message: "Please provide your GitHub username.",
    name: "github",
  },
  {
    type: "input",
    message: "Please provide your email address.",
    name: "email",
  },
])

// console log users input
.then((response) => {
    fs.writeFile('README.md', `
# ${response.title}  ![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Description
    ${response.description}
    
## Installation
    ${response.installation}
    
## Usage
    ${response.usage}
    
## Contribution
    ${response.contribution}
    
## Test
    ${response.test}
    
## License
    ${response.license}
    
## Questions?
    GitHub: [${response.github}](https://github.com/${response.github}/)
    Email: ${response.email}
    `, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
