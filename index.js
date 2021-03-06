const inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./utils/generateMarkdown');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?', 
        name: 'project_title',
    }, 
    {
        type: 'input',
        message: 'Give a description of your project:', 
        name: 'project_description',
    },
    {
        type: 'input',
        message: 'Please provide a table of contents if applicable:', 
        name: 'project_tableOfcontents',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project:', 
        name: 'project_installation',
    }, 
    {
        type: 'input',
        message: 'Please provide information about usage if applicable:', 
        name: 'project_usage',
    }, 
    {
        type: 'list',
        message: 'Choose a license for your project', 
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'project_license',
    }, 
    {
        type: 'input',
        message: 'Please list any contributors for your project:', 
        name: 'project_contributors',
    }, 
    {
        type: 'input',
        message: 'Please provide any testing information:', 
        name: 'project_test',
    }, 
    {
        type: 'input',
        message: 'Please provide your GitHub username:',  
        name: 'github',
    }, 
    {
        type: 'input',
        message: 'Please provide your email address:',  
        name: 'email',
    }, 
])
.then((response)=>{
    fs.writeFile('readme.md', createReadMe(response),(err)=> err ? console.error(err): console.log('Success, your file has been created'))
});