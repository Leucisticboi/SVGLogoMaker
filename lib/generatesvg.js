const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

function generateSVG(text, textColor, shape, shapeColor) {
    // Initialize shapeInstance variable
    let shapeInstance;

    switch (shape) {
        case 'circle':
            shapeInstance = new Circle(shapeColor);
            break;
        case 'triangle':
            shapeInstance = new Triangle(shapeColor);
            break;
        case 'square':
            shapeInstance = new Square(shapeColor);
            break;
        default:
            console.log('Invalid shape.');
            return;
    }

    // Initialize svgContent to write to final svg file
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="150" y="100" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-size="50">${text}</text>
    </svg>
    `;

    // Write svg information to file
    fs.writeFileSync(`./examples/logo.svg`, svgContent);
    console.log('Generated logo.svg');
}

module.exports = generateSVG;