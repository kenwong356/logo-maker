const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

const shapeConstructor = {
  circle: Circle,
  triangle: Triangle,
  square: Square
};

async function generateSvg() {
  try {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter any three characters for the logo',
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color keyword or hexadecimal color code for your texts color',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices: ['circle', 'triangle', 'square']
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color keyword or hexadecimal for your shapes color',
          }
        ]);

    const { text: userText, textColor: userTextColor, shape: userShape, shapeColor: userShapeColor } = answers;

    console.log(userShape);

    let svgContent = '';

    if (shapeConstructor[userShape]) {
      const userShapeInstance = new shapeConstructor[userShape](userText, userTextColor, userShape, userShapeColor);
      svgContent = userShapeInstance.generateSvg();
    }

    fs.writeFileSync('./example.svg', svgContent, 'utf-8');
    console.log('SVG generated!');
  } catch (error) {
    console.error(error);
  }
}

generateSvg();
