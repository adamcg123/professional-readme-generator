// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensing) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licensing) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensing) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License

  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Description

  ${data.description}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#Contribution)
  * [testing](#testing)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.projectUsage}


  ## Contribution:
  ${data.contributions}


  ## Testing:

  ${data.testing}

  ## Additional Info:
  - Github: [${data.gitUsername}](https://github.com/${data.gitUsername})
  - Email: ${data.email} 
  `;
}

module.exports = generateMarkdown;
