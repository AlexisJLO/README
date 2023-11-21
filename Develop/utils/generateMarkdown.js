// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache-2.0":
      return "![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "GPL-3.0":
      return "![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg)";
    case "BSD-2-Clause":
      return "![BSD 2-Clause License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
    case "BSD-3-Clause":
      return "![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Features](#features)
  - [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)} ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}
  
  ## Questions
  For questions or concerns, please contact me at [${data.email}](mailto:${
    data.email
  }).
  You can also find me on GitHub: [${data.username}](https://github.com/${
    data.username
  }).
  `;
}

module.exports = generateMarkdown;
