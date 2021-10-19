const circle = require('./circle.js');
const Square = require('./square');


const square = new Square(2);

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

console.log(`the are of the square is ${square.area()}`);
