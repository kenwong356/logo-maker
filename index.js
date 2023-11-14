const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");


const shapeConstructor = {
    circle: Circle,
    square: Square,
    triangle: Triangle
  };
  
  async function generateSvg() {
    try {
      const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter any three characters for logo'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color keyword or hexadecimal color code for your texts color'
        },

        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color keyword or hexadecimal for your shapes color',
        },
    ]);
    
      } catch (error) {
        console.error(error);
      }
    }
    
    generateSvg();