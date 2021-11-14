//Include packages needed for this application
const inquirer = require("inquirer");
const questions = require("./src/questions");
const { consoleUserText, consoleProjectText, consoleAppStart } =
    require("./src/consoleLogText");
const generateMarkdown = require("./src/generateMarkdownText");
const { writeToFile } = require("./utils/generate-file");

const promptUser = () => {
    console.log(`${consoleUserText}`);
    return inquirer
        .prompt(questions.userQuestions)
};

const promptProject = readMeFileData => {
    console.log(`${consoleProjectText}`);
    // If there's no 'projects' array property, create one
    if (!readMeFileData.projectData) {
        readMeFileData.projectData = [];
    }
    return inquirer
        .prompt(questions.projectQuestions)
        .then(projectData => {
            readMeFileData.projectData.push(projectData);
            return readMeFileData;
        })
};

function main() {
    `${consoleAppStart}`;
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
        })
        .catch(err => {
            console.log(err);
        });
};

main();