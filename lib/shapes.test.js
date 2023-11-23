const { Circle, Triangle, Square } = require('./shapes.js');

describe('Test', () => {

    describe('Circle', () => {
        it(`should generate a blue Circle with the text ABC inside`, () => {
    const circle = new Circle ('ABC', 'blue', 'circle')
    const svg = circle.generateSvg();
    expect(svg).toContain('<circle');
        });
    });


    
});