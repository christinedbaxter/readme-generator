//Include packages needed for this application
const inquirer = require("inquirer");
const questions = require("./src/questions");
const consoleText = require("./src/consoleLogText");
const generateMarkdownText = require("./src/generateMarkdownText");
const { writeToFile } = require("./utils/generate-file");

const promptUser = () => {
    consoleText.consoleUserText;
    return inquirer.prompt(questions.userQuestions)
};

const promptProject = readMeFileData => {
    consoleText.consoleProjectText;
    return inquirer
        .prompt(questions.projectQuestions)
        .then(projectData  = () =>  {            
            return readMeFileData;
        });
};

promptUser()
    .then(promptProject)
    .then(readMeFileData => {
        return generateMarkdownText(readMeFileData);
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