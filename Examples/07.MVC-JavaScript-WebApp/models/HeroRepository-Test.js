let heroRepository = require('./HeroRepository.js')
heroRepository.getHeroes().then(heroes => {
    console.log(heroes)
})

let heroId = 1
heroRepository.getHero(heroId).then(hero => {
    //Displays a pretty-printed multiline JSON representation indented with 2 spaces
    console.log(JSON.stringify(hero, null, 2))
})

