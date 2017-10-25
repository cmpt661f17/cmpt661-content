import * as lib from './module1.js';
console.log("lib.square(11) = ", lib.square(11)); // 121
console.log("lib.double(4) = ", lib.double(4)); // 8

let student1 = new lib.Student("Ali", "Ahmed");
console.log("student1.name: ", student1.name);