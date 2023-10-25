const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
      //TODO: create questions for read me here. Check documentation to see if you're gonna use this type ".prompt"
    {
      type: 'input',
      message: 'Enter project title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation?, Why did you build this project?, What problem does it solve?, What did you learn?',
      name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Table of contents:',
        name: 'tableofcontents',
        choices: ['yes','no'],
    },
    {
        type: 'input',
        message: '',
        name: 'installation',
    },
    {
        type: 'input',
        message: '',
        name: 'usage',
    },
    {
        type: 'list',
        message: '',
        name: 'license',
        choices: ['MIT', 'REGULAR', 'SECURE'],
    },
    {
        type: 'input',
        message: '',
        name: 'contributing',
    },
    {
        type: 'input',
        message: '',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter my GitHub username:',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Enter E-mail:',
        name: 'email',
    },
  ])
  .then((answers) => {
    //here we are creating the type of file we want with the method writeFile (maybe use appendfile vs writefile) because writefile replaces content in file and appendfile adds to it.
    var markdown = generateMarkdown(answers)

    fs.writeFile('README.md', markdown,(err) =>
    err ? console.log(err) : console.log('Success!')
    
    
    )})
    .catch((error) => {
        console.log(error)
    });
    
    function generateMarkdown(data) {
      return `
# Title: ${data.title}

# Description
${data.description}

# Table of contents
- Title 
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

# Installation
${data.installation}

# Usage
${data.usage}

# License 

Covered under ${data.license} license.

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions 

For questions click this link: https://github.com/${data.questions} or E-mail here: ${data.email} `
  }