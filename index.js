// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username, do not include @?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description for your project.",
      name: "description",
    },
    {
      type: "checkbox",
      message: "Select one or more titles to build your table of contents.",
      name: "tableOfContents",
      choices: [
        "Description",
        "Table of Contents",
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Test Instructions",
        "Questions",
      ],
    },
    {
      type: "input",
      message: "What are the instructions for installation?",
      name: "installation",
    },
    {
      type: "input",
      message: "What information is needed for using this?",
      name: "usage",
    },
    {
      type: "list",
      message: "Pick a license for your application.",
      name: "license",
      choices: ["MIT", "Apache-2.0", "GNU GPLv3", "MPL-2.0"],
    },
    {
      type: "input",
      message: "What are the guidelines for contributing to your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Write instructions for how to perform a test.",
      name: "testInstructions",
    },
    {
      type: "input",
      message: "If you have any questions, please contact",
      name: "questions",
      choices: "questions",
    },
  ])

  .then((data) => {
    console.log(data);
    //store name of file in const
    const filename = "myREADME.md";
    //save information to the file
    fs.writeFile(filename, createMarkdown(data),
      (err) => (err ? console.log(err) : console.log("README created!"))
    );
  });

// TODO: Create a function to initialize app
function createMarkdown(data) {
return `
# ${data.title}

## License 
${data.license} 

## Description
${data.description}

## Table Of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Test Instructions
${data.testInstructions}

### Questions
${data.questions} ${data.email} or through GitHub at ${data.username}`;
};

// Function call to initialize app
init();