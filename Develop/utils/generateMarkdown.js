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

  ${data.desc}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#Contribution)
  * [testing](#testing)
  
  ## Installation

  ${data.install}

  ## Usage

  ${data.proUse}


  ## Contribution:
  ${data.contributions}


  ## Testing:

  ${data.testing}

  ## Additional Info:
  - Github: [${data.gitUser}](https://github.com/${data.gitUser})
  - Email: ${data.email} 
  `;
}

module.exports = generateMarkdown;
