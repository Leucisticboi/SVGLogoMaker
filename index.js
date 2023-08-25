// Import inquirer
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
// Import fs
const fs = require('fs');

const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'What text would you like on your logo?',
        maxLength: 3,
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like your logo text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the shape to be?',
    }
];

inquirer.prompt(questions);