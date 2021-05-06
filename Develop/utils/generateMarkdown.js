// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
  
  # ${userInput.title}
  - [LICENSE](link to licence badge)


    ## TABLE OF CONTENTS
    -   [DESCRIPTION](#description)
    -   [INSTALLATION](#installation)
    -   [USAGE](#usage)
    -   [CONTRIBUTING](#contributing)
    -   [TEST](#test)
    -   [LICENSE](#license)
    -   [QUESTIONS](#question)


    ##  DESCRIPTION
    ${userInput.description}

    ##  INSTALLATION
    ${userInput.installation}

    ##  USAGE
    ${userInput.usage}

    ## CONTRIBUTING
    ${userInput.contributing}

    ## TEST
    ${userInput.test}

    ## LICENSE
    ${userInput.license}

    ## QUESTIONS
    To find how the application was made please see the link to my GitHub account 
    ${userInput.question}
`;
}

module.exports = generateMarkdown;
