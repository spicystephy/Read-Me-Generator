// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "Username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "Email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "Title",
    },
    {
      type: "input",
      message: "Write a description for your project.",
      name: "Description",
    },
    {
      type: "checkBoxes",
      message: "Select one or more titles to build your table of contents.",
      name: "TableofContents",
      choices: ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Test Instructions", "Questions"]
    },
    {
      type: "list",
      message: "Pick a license for your application",
      name: "License",
      choices: ["MIT", "Apple", "Google"],
    },
  ])

  .then((burrito) => {
    console.log(burrito);
    const filename = `${burrito.Title}.md`;
    //to save information to a file
    fs.writeFile(
      filename,
      `${burrito.Description} hello boise you are weird`,
      (err) => (err ? console.log(err) : console.log("File created."))
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
