# SVG Shape Generator
  
## Description 
The purpose of this program is to dynamically generate simple SVG logos for freelance web developers. Given a 3-character text, text color, a shape(square, triangle, circle), and shape color, the application will create a new SVG logo within a 300px X 200px SVG image. 
  
## Table of Contents 
[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## User Story
AS a freelance web developer

I WANT to generate a simple logo for my projects

SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input

WHEN I am propted for text

THEN I can enter up to three characters

WHEN I am prompted for the text color

THEN I can enter a color keyword (OR a hexidecimal number)

WHEN I am prompted for a shape

THEN I am presented with a list of shapes to choose from: circle, triangel, and square

WHEN I am prompted for the shape's color

THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts

THEN an SVG file is created named 'logo.svg'

AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the 'logo.svg' file in a browser

THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Installation
The repository for this application can be cloned to your computer and run in VS Code, or cloned to a Heroku-based server repository.
  
## Usage
Run the command 'node index.js' in your CLI. You will be prompted for your logo's text, the text color, the shape of your logo, and the color of that shape. After answering every prompt a new file will be written to the 'examples' folder.
  
## Contributing
I relied on previous practice assignments from the UofU Full-Stack programming bootcamp.

## Tests
Use the command 'npm test' in your CLI to see test results for each shape included in the application's code.

## Questions
If you have any questions regarding this project, you can contact me via my GitHub profile or email me directly at the address below.

[LeucisticBoi](https://github.com/LeucisticBoi)

robert.henderson0597@gmail.com
