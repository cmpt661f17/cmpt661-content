//watch this demo http://www.youtube.com/watch?v=giJV6boOLxU
'use strict'
let animal = {
        eyes: 2,
        legs: 4,
        name: "Animal",
        toString () {
                return this.name + " with " + this.eyes + " eyes and " + this.legs + " legs."
        }
}

let myDog = Object.create(animal);
myDog.name = "Max";
let spotDog = Object.create(myDog);

//Add a new property to myDog object.
//These new properties will be available in spotDog because it inherits from myDog
myDog.age = 13;
myDog.speak = function() {
        console.log(`${this.name}.speak... Woof, Woof`);
}

spotDog.name='Spotty';

//Extend spotDog with extra properties
spotDog.color = 'White';
spotDog.pattern = 'Spots';
spotDog.patternColor = 'Black';
spotDog.weight = 22;

spotDog.eat = function() {
     console.log(`${this.name}.eat... Yum, Yum`);
}

console.log('myDog: ', myDog);
myDog.speak();
console.log();

//spotDog object inherited the static and dynamic properties from myDog object
console.log('spotDog.name: ', spotDog.name);
console.log('spotDog.age: ', spotDog.age);
spotDog.speak();
console.log('spotDog.toString(): ', spotDog.toString());
console.log();

//The derived object can add its own properties and methods
console.log('spotDog: ', spotDog);
spotDog.eat();

console.log('spotDog.__proto__ : ', spotDog.__proto__);