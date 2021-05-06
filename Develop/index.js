// TODO: Include packages needed for this application

// fs is a Node standard library package for reading and writing files
const fs = require('fs');
// inquirer is another Node standard library package for prompting users
const inquirer = require("inquirer");
// inquirer is another Node standard library package for prompting users
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What are the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contributions to the project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What is the license used in this project?',
        name: 'licence',
        choices: ['MIT', 'GPL', 'GNU', 'Apache', 'N/A']
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'gitHubPage',
    },
    {
        type: 'input',
        message: 'What are additional information of reaching me for furher questions?',
        name: 'aditionalQuestions',
    }
];

// TODO: Create a function to write README file
function createReadMe(title, userInput){
    fs.writeFile(`${title}.md`, userInput, function(err){
        if(err){
            return console.log("Error Occured")
        }else{
            console.log(`successfully created ${title}ReadMe.md`)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        createReadMe(`${questions[0].name}ReadMe`, generateMarkdown(userInput))
    })   
}

// Function call to initialize app
init();


