let cat = { name: 'cat', legs : 4, eyes: 2 };
let myCat = { name: 'Garfield' };
Object.setPrototypeOf(myCat, cat);
myCat.name = 'Garfield';
myCat.breed = 'Persian';

console.log(myCat.name);
console.log(myCat.legs);
console.log(myCat.hasOwnProperty('eyes'));

console.log( `${myCat.name} is a ${myCat.breed} cat with ${myCat.legs} legs and ${myCat.eyes} eyes`);


