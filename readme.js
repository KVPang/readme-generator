function readme(data) {
return `# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Contribution](#contribution)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation 

${data.installation}

## Contribution

${data.contributing}

## Usage

${data.usage}

## Tests

${data.tests}

## Questions

${data.questions}
 
## License

![](https://img.shields.io/badge/license-${data.license}-blue)

## User Name

${data.userName}

## Email

${data.email}
`
}

module.exports = readme