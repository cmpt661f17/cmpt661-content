const heroRepository = require('./heroRepository.js');

console.log("Hero #1:\n", heroRepository.getHero(1));
console.log("\nAll Heroes:\n", heroRepository.heroes);