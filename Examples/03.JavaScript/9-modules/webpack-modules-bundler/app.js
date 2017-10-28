import * as module1 from './module1.js';

function getGreeting () {
    var element = document.createElement('div');
    element.innerHTML = module1.greet();
    return element;
}

console.log("this is from app.js - executed after the page loads");
document.body.appendChild( getGreeting() );