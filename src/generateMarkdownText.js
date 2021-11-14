
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT":
      license = "MIT";
      break;
    case "APACHE 2.0":
      license = "APACHE%202.0";
      break;
    case "GPL 3.0":
      license = "GPL%203.0";
      break;
    case "BSD 3":
      license = "BSD%203";
      break;
    default:
      license = "NONE";
  }
  
  return license === "NONE" ? "" : `![License](https://img.shields.io/badge/license-${license}-success)`;
}

// Create a function to generate markdown for README
const generateMarkdownText = (data) => {
  
  const {
    githubUserName, userEmail,
    projectData: [
      {
        projectName, description, license, installDependency, runTest, repoInfoNeeded, projectContributions }
    ]
  } = data;

  return `${renderLicenseBadge(license)}
  # ${projectName}

  ## Description

  ${description}

  [back to top](#table-of-contents)

  ## Table of Contents
  [Description](#description) | [Installation](#installation) | [Usage](#usage) |  [License](#license) | [Contributing](#contributing) | [Tests](#tests) | [Questions](#questions)

  ## Installation

To install necessary dependencies, run the following command:
\`\`\`
${installDependency}
\`\`\`

[back to top](#table-of-contents)

  ## Usage
  
  The application is invoked by using the following command:
\`\`\`
node index.js
\`\`\`
  
Additional usage information is provided below, if needed.
${repoInfoNeeded}

[back to top](#table-of-contents)

  ## License

This project is licensed under the ${license} license.

[back to top](#table-of-contents)

  ## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./code_of_conduct.md)

${projectContributions}

[back to top](#table-of-contents)

  ## Tests

To run tests, run the following command:
\`\`\`
${runTest}
\`\`\`
[back to top](#table-of-contents)

  ## Questions 

  If you have any questions about the repo, open an issue or contact me directly at ${userEmail}. You can find more of my work at [baxters4karma](https://github.com/${githubUserName}/).

[back to top](#table-of-contents)
  `
};

module.exports = generateMarkdownText;

