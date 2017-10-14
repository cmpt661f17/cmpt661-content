const  greeting = require('./greeting');
const circle = require('./circle.js');

console.log('Loaded greet module');
let text = greeting.yahala();
console.log(text);


let r = 4;
console.log(`The area of radius ${r}: ${circle.area(r)}
and its circumference is: ${circle.circumference(r)}`);
