
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
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

  ## GitHub Username:

  ${githubUserName}
  
  `

};

module.exports = generateMarkdownText;

