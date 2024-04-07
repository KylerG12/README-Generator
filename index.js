// Variables
let badge = "";
const fs = require("fs");
const questions = require("inquirer");


//Promise chain
questions
  .prompt([
    {
      type: "input",
      message: "What is the title of your application?",
      name: "myTitle",
    },
    {
      type: "input",
      message: "Enter a description of your application",
      name: "myDescription",
    },
    {
      type: "input",
      message: "Enter any installation instructions for the application",
      name: "myInstall",
    },
    {
      type: "input",
      message: "Enter your usage information for the application",
      name: "myUsage",
    },
    {
      type: "input",
      message: "Enter any contribution guidelines",
      name: "myContribution",
    },
    {
      type: "input",
      message: "Enter any potential tests",
      name: "myTest",
    },
    {
      type: "checkbox",
      message: "What license are you using (choose only one)?",
      choices: ["MIT", "Apache 2.0", "GNU 3.0", "BSD-3", "None of the above"],
      name: "myLicense",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "myGit",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "myEmail",
    },
  ])
  .then(
    (response) => {
      if (response.myLicense == "MIT") {
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      } else if (response.myLicense == "Apache 2.0") {
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      } else if (response.myLicense == "GNU 3.0") {
        badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      } else if (response.myLicense == "BSD-3") {
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      }
      

      appendFile(response);
});



// Write function
function appendFile(response) {
    fs.writeFile( "READ.md",

`${badge}
# ${response.myTitle}

## Table of Contents
- [Descrition](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Description

${response.myDescription}

## Installation

${response.myInstall}

## Usage

${response.myUsage}

## Contributing

${response.myContribution}

## License

Operating under the ${response.myLicense} license.

## Tests

${response.myTest}

## Questions
[My Github](https://github.com/${response.myGit})    
Please direct any questions to my email at <${response.myEmail}>`,

    (err) => (err ? console.error(err) : console.log("README Created"))
  )
};