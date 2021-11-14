const { template } = require("lodash");

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  return license === "NONE" ? "" : `![License](https://img.shields.io/badge/license-${license}-success)`;
}

// Create a function to generate markdown for README
const generateMarkdown = (data) => {
    console.log(data);
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

