const fs = require('fs');

class Shapes {

    constructor (text, shapeColor, shape, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.shape = shape;
        this.textColor = textColor;

};
};


class Circle extends Shapes {
    generateSvg() {
        return `<svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">

        <circle cx="180" cy="150" r="150" fill="${this.shapeColor}"/>
        
        <text x="175" y="180" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shapes {
    generateSvg() {
        return `<svg version="1.1" width="800" height="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="0,200 150,0 300,200" fill="${this.shapeColor}"/>
        
        <text x="150" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shapes {
    generateSvg() {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <rect x="100" y="100" width="300" height="300" fill="${this.shapeColor}"/>
    
        <text x="250" y="275" font-size="80" text-anchor="middle" fill='${this.textColor}'>${this.text}</text></svg>`
    }
}

module.exports = {Circle, Triangle, Square};