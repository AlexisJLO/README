// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
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
    name: "description",
    message: "Provide a short description explaining your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to use?",
    choices: [
      {
        name: "MIT License",
        value: "MIT",
      },
      {
        name: "Apache License 2.0",
        value: "Apache-2.0",
      },
      {
        name: "GNU General Public License v3.0",
        value: "GPL-3.0",
      },
      {
        name: 'BSD 2-Clause "Simplified" License',
        value: "BSD-2-Clause",
      },
      {
        name: 'BSD 3-Clause "New" or "Revised" License',
        value: "BSD-3-Clause",
      },
    ],
  },
  {
    type: "input",
    name: "features",
    message: "If your project has a lot of features, list them here.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter contact email",
  },
  {
    type: "input",
    name: "username",
    message: "Enter GitHub username",
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
