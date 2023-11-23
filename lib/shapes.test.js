const { Circle, Triangle, Square } = require('./shapes.js');

describe('Test', () => {

    describe('Circle', () => {
        it(`should generate a blue circle with the text ABC inside`, () => {
    const circle = new Circle ('ABC', 'blue', 'circle')
    const svg = circle.generateSvg();
    expect(svg).toContain('<circle');
        });
    });

    describe('Triangle', () => {
        it(`should generate a green triangle with the text ABC inside`, () => {
    const triangle = new Triangle('ABC', 'green', 'triangle')
    const svg = triangle.generateSvg();
    expect(svg).toContain('<polygon');
        });
    });

    describe('Square', () => {
        it(`should generate a red square with the text ABC inside`, () => {
    const square = new Square('ABC', 'red', 'square')
    const svg = square.generateSvg();
    expect(svg).toContain('<rect');
        });
    });
    
});