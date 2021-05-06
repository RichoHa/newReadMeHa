// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {

  
  let licenseBadge;
  let licenselink;
  let takeMetoLicense;

     // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string

    if (userInput.license=="MIT"){
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      licenselink= 'https://opensource.org/licenses/MIT'
      takeMetoLicense= `[License Section](#license)`
    } else if (userInput.license=="GNU GPL"){
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      licenselink= 'https://www.gnu.org/licenses/gpl-3.0'
      takeMetoLicense= `[License Section](#license)`
    } else if (userInput.license=="Apache"){
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      licenselink= 'http://www.apache.org/licenses/'
      takeMetoLicense= `[License Section](#license)`
    } else {
      licenseBadge = ""
      licenselink = ""
      takeMetoLicense = ""
    }


  return `
  # ${userInput.title}

 
  ${licenseBadge}


  ${takeMetoLicense}



  ## TABLE OF CONTENTS
  * [DESCRIPTION](#description)
  * [INSTALLATION](#installation)
  * [USAGE](#usage)
  * [CONTRIBUTING](#contributing)
  * [TEST](#test)
  * [LICENSE](#license)
  * [QUESTIONS](#question)


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
  This application is license under:
  ${userInput.license}

  
  To learn more about the license, please click the below link.
  ${licenselink}

  ## QUESTIONS
  To find how the application was made please see the link to my GitHub account 
  https://github.com/${userInput.gitHubPage}

  if you have further queries, you can find out below:
  ${userInput.aditionalQuestions}
`;
}

module.exports = generateMarkdown;
