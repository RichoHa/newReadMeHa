// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  var licenseBadge;
  var licenselink;
  var takeMetoLicense;

  // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseBadge) { 
  if (licenseBadge=="MIT"){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (licenseBadge=="GNU GPL"){
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0"
  } else if (licenseBadge=="Apache"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else {
    licenseBadge = ""
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenselink) { 
  if (licenselink=="MIT"){
    licenselink= 'https://opensource.org/licenses/MIT'
  } else if (licenselink=="GNU GPL"){
    licenselink= 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (licenselink=="Apache"){
    licenselink= 'http://www.apache.org/licenses/'
  } else {
    licenselink = ""
  }

  return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(LicenseSection) { 
  if (LicenseSection=="MIT"){
    LicenseSection= `[Go to licence](#userlicence)`
  } else if (LicenseSection=="GNU GPL"){
    LicenseSection= `[Go to licence](#userlicence)`
  } else if (LicenseSection=="Apache"){
    LicenseSection= `[Go to licence](#userlicence)`
  } else {
    LicenseSection = ""
  }

  return LicenseSection;
}

  renderLicenseBadge(userInput.license);
  renderLicenseLink(userInput.license);
  renderLicenseSection(userInput.license);

  return `
  # ${userInput.title}
  ${licenseBadge}
  ${takeMetoLicense}
  ${licenselink}


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
