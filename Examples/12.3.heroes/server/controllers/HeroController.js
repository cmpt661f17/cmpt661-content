const heroRepository = require('../models/HeroRepository');

class HeroController {

  async getHeroes(req, res) {
    const heroes = await heroRepository.getHeroes();
    res.json(heroes);
  }

  async addHero(req, res) {
    const hero = await heroRepository.addHero(req.body);
    console.log("heroController.addHero", hero);
    res.status(201).send(hero);
  }

  async getHero(req, res) {
    const heroId = req.params.heroId;
    const hero = await heroRepository.getHero(heroId);
    res.json(hero);
  }

  async updateHero(req, res) {
    console.log("updateHero", req.body);
    const hero = await heroRepository.updateHero(req.body);
    res.status(200).send(hero);
  }

  async deleteHero(req, res) {
    const heroId = req.params.heroId;
    await heroRepository.deleteHero(heroId);
    res.status(204).send('Removed');
  }

}

module.exports = new HeroController();
