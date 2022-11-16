// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ name, usage, description, license }) =>
`# ${name}

## Description
${description} 

## Table of Contents 

## Installation 

## Usage
${usage}

## License
${license}

## Contributing    

## Tests    

## Questions`;
// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the title of your project?",
    },
    {
      type: "checkbox",
      name: "usage",
      message: "What languages did you use to create your project?",
      choices: ["HTML", "CSS", "JavaScript", "Node"],
    },
    {
      type: "input",
      name: "description",
      message: "Write a short description of your project",
    },
    {
      type: "list",
      name: "license",
      message: "What license do you have for your project?",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2- Clause "Simplified" License',
        "Other",
      ],
    },
  ])
  .then((answers) => {
    const pageConent = generateReadme(answers);

    // TODO: Create a function to write README file
    fs.writeFile('README.md', pageConent, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });