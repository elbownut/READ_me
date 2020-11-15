function generateMarkdown(data) {
  return `
# Project Title : ${data.title}

## Project Description:
${data.desc}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Test
${data.test}


## Badges

![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})

`;
}

module.exports = generateMarkdown;
