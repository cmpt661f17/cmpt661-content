const Hero = require('./HeroModel');

class HeroRepository {

  async initDb() {
    //If the heroes collections is empty then init the db with heroes.json

    //Uncomment the line below to empty Heroes collection and re-init DB
    //await Hero.remove({});
    const heroesCount = await this.getHeroesCount();
    console.log('Number of existing heroes:', heroesCount);
    if (heroesCount === 0) {
      await this.loadFromJsonFile();
    }
  }

  async loadFromJsonFile() {
    const fs = require('fs-extra');
    const  heroes = await fs.readJson('./server/data/heroes.json');

    for (let hero of heroes) {
      await this.addHero(hero);
    }
  }

  getHeroes() {
    return Hero.find({})
  }

  getHeroesCount() {
    return Hero.count({});
  }

  getHero(heroId) {
    return Hero.findById(heroId);
  }

  addHero(newHero) {
    return Hero.create(newHero);
  }

  updateHero(hero) {
    const heroId = hero._id;
    delete hero._id;
    return Hero.update({_id: heroId}, hero);
  }

  deleteHero(heroId) {
    return Hero.findByIdAndRemove(heroId);
  }

}

module.exports = new HeroRepository();
