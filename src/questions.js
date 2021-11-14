// array to hold GitHub user-specific questions
const userQuestions = [
    {
        type: "input",
        name: "githubUserName",
        message: "What is your GitHub username? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("\nPlease enter your name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address? (Required)",
        validate: nameInput => {
            if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nameInput))) {
                return true;
            } else {
                console.log("\nPlease enter a valid email address!");
                return false;
            }
        }
    }
];

// array to hold GitHub project-specific questions
const projectQuestions = [
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("\nPlease enter a project name!");
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
                console.log("\nPlease enter a short description!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
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
    }
];

module.exports = { userQuestions, projectQuestions };