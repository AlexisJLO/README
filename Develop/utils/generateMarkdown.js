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
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "Apache-2.0":
      return "[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
    case "GPL-3.0":
      return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD-2-Clause":
      return "[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD-3-Clause":
      return "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This project is licensed under the ${renderLicenseLink(
        license
      )}. The MIT License is a permissive open-source license that allows you to use, modify, and distribute the code in your projects. It only requires that you include the original copyright notice in your project.`;
    case "Apache-2.0":
      return `This project is licensed under the ${renderLicenseLink(
        license
      )}.  The Apache License 2.0 is an open-source license that provides more specific terms and conditions for using and distributing software. It includes provisions related to patents and contributions.`;
    case "GPL-3.0":
      return `This project is licensed under the ${renderLicenseLink(
        license
      )}. The GNU GPL v3.0 is a strong copyleft license that requires any derivative works or modifications to also be released under the same license. It promotes open-source software and ensures that modifications are also open source.`;
    case "BSD-2-Clause":
      return `This project is licensed under the ${renderLicenseLink(
        license
      )}. The BSD 2-Clause License is a permissive open-source license that allows you to use, modify, and distribute the code in your projects. It only requires that you include the original copyright notice in your project.`;
    case "BSD-3-Clause":
      return `This project is licensed under the ${renderLicenseLink(
        license
      )}. The BSD 3-Clause License is a permissive open-source license that allows you to use, modify, and distribute the code in your projects. It requires you to include the original copyright notice, disclaimer, and attribution notices in your project.`;
    default:
      return "";
  }
}

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
