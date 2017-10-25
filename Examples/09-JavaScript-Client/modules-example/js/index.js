import { square, double, Student } from './module1.js';

let resultsDiv = document.querySelector('#results');

let p = document.createElement('p');
p.textContent = `square(11) = ${square(11)}`;
resultsDiv.appendChild(p);

p = document.createElement('p');
p.textContent = `double(4) = ${double(4)}`;
resultsDiv.appendChild(p);

var student1 = new Student("Ali", "Ahmed");
p = document.createElement('p');
p.textContent = `student1.name: ${student1.name}`;
resultsDiv.appendChild(p);