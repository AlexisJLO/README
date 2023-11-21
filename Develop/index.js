// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "Installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "Usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "choice",
    name: "License",
    message: "placeholder",
  },
  {
    type: "input",
    name: "Features",
    message: "If your project has a lot of features, list them here.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README.md successfully generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
  });
}

// Function call to initialize app
init();
