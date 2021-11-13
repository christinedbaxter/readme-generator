// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeToFile } = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./src/file-template.js");


// TODO: Create an array of questions for user input
const promptUser = () => {
    console.log(`
    =====================
       User Information
    =====================
    `);
    return inquirer.prompt([
    {
        type: "input",
        name: "githubUserName",
        message: "What is your GitHub username? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        }
    }
    ])
};

const promptProject = readMeFileData => {
    console.log(`
    =======================
      Project Information
    =======================
    `);

    return inquirer
        .prompt([
            {
                type: "input",
                name: "projectName",
                message: "What is your project's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a project name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "description",
                message: "Provide a short description of your project (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a short description!");
                        return false;
                    }
                }
            },
            {
                type: "list",
                name: "license",
                message: "What kind of license should your project have?",
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
            },
            {
                type: "input",
                name: "installDependency",
                message: "What command should be run to install dependencies",
                default: "npm i"
            },
            {
                type: "input",
                name: "runTest",
                message: "What command should be run to run tests?",
                default: "npm test"
            },
            {
                type: "input",
                name: "repoInfoNeeded",
                message: "What does the user need to know about using the repo?"
            },
            {
                type: "input",
                name: "projectContributions",
                message: "What does the user need to know about contributing to the repo?"
            },
            // {
            //     type: "confirm",
            //     name: "confirmAddProject",
            //     message: "Would you like to enter another project?",
            //     default: false
            // }
        ])
        .then(projectData  = () =>  {            
            return readMeFileData;
        });
};

promptUser()
    .then(promptProject)
    .then(readMeFileData => {
        return generateMarkdown(readMeFileData);
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });