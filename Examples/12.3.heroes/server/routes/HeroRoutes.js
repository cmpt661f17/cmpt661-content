//Look at this super-slim, happy and joyful router after kicking out all the logic to the controller 

const express = require('express');
const heroController = require('../controllers/HeroController');

const heroRouter = express.Router();

heroRouter.route('/')
    .post((req, res) => heroController.addHero(req, res))
    .get((req, res) => heroController.getHeroes(req, res));

heroRouter.route('/:heroId')
    .get((req, res) => heroController.getHero (req, res))
    .put((req, res) => heroController.updateHero (req, res))
    .delete((req, res) => heroController.deleteHero (req, res));

module.exports = heroRouter;

