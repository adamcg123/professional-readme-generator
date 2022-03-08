// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: proTitle => {
            if (proTitle) {
                return true
            } else {
                console.log("Title is needed! please enter one.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "please write a description of your project.",
        validate: proDesc => {
            if (proDesc) {
                return true
            } else {
                console.log("A description is needed! please make one.")
                return false
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "how do you install the project ",
        validate: proInstall => {
            if (proInstall) {
                return true
            } else {
                console.log("A installation process is needed! please enter one.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "projectUsage",
        message: "How do you use this project?",
        validate: proTitle => {
            if (proTitle) {
                return true
            } else {
                console.log("You need to tell us the use of your project.")
                return false
            }
        }
    },
    {
        type: "list",
        name: "licensing",
        message: "pick a licens for your project",
        choices: ["MIT", "GPLv3", "BSD-3-Clause", "Mozilla-Public", "Apache 2.0", "None"],
        validate: proLice => {
            if (proLice) {
                return true
            } else {
                console.log("please pick a license.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "gitUsername",
        message: "What is your github username?",
        validate: gitUser => {
            if (gitUser) {
                return true
            } else {
                console.log("a username is needed! please enter one.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "testing",
        message: "What commands are needed in order to run this app?",
        validate: gitUser => {
            if (gitUser) {
                return true
            } else {
                console.log("The commands are needed! please enter some")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email? if not then just press enter',
    },
    {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err
        console.log("Info was transferred to the readme successfuly!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput))
        })
}


// Function call to initialize app
init();
