import * as module1 from './module1.js';

function getComponent () {
    var element = document.createElement('div');
    element.innerHTML = module1.greet();
    return element;
}

console.log("from app.js");
document.body.appendChild(getComponent());