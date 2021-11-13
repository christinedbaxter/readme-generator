const { template } = require("lodash");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  return license === "NONE"?"": `![License](https://img.shields.io/badge/license-${license}-)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdownText(data) {
    console.log(data);
  return `# ${data.title}

`;
}

module.exports = generateMarkdownText;

