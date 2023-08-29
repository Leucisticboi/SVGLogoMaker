// Import inquirer
const inquirer = require('inquirer');
// Import Maxlength for restricting inquirer text input to 3 letters
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const fs = require('fs');
const generateSVG = require('./lib/generatesvg');

// Define program prompts
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

// Define run() function to present prompts, wait for responses, then generate the SVG file
async function run() {
    const answers = await inquirer.prompt(questions);
    generateSVG(answers.text, answers['text-color'], answers.shape, answers.color);
}

run();
