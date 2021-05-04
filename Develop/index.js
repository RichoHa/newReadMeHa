// TODO: Include packages needed for this application

// fs is a Node standard library package for reading and writing files
const fs = require('fs');
// inquirer is another Node standard library package for prompting users
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
inquirer.prompt([
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
        type: 'list-input',
        message: 'What is the license used in this project?',
        name: 'licence',
        choices:['MIT','GPL','GNU','Apache','N/A']
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
    },
])

// TODO: Create a function to write README file

`   
}


// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)

// TODO: Create a function to initialize app
function init() {
    const createReadMe = generateMarkDown()

}

// Function call to initialize app
init();


