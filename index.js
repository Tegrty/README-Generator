
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
let licenseInfo = "";

// conditional statement to determine which license badge to display and link to license

if (response.license === "MIT") {
  licenseInfo = `[MIT License](https://opensource.org/licenses/MIT)`;
} else if (response.license === "Apache") {
  licenseInfo = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
} else if (response.license === "GPL") {
  licenseInfo = `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0)`;
} else if (response.license === "BSD") {
  licenseInfo = `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
} else if (response.license === "None") {
  licenseInfo = `None`;
}
    fs.writeFile('README.md', `
# ${response.title}               ![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Description
${response.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

    
## Installation
    ${response.installation}
    
## Usage

${response.usage}

## Contribution
${response.contribution}
    
## Test
${response.test}
    
## License
${licenseInfo}

## Questions?
GitHub: [${response.github}](https://github.com/${response.github}/)  
Email: ${response.email}`,
 (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});



