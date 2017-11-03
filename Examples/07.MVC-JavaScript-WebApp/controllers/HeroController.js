const heroRepository = require('./../models/HeroRepository');

class HeroController {
    async getHeroes(req, res) {
        const heroes = await heroRepository.getHeroes()
        res.json(heroes)
    }

    async getHero (req, res) {
        try {
            const heroId = req.params.id
            console.log('getHero.req.params.id', heroId)
            const hero = await heroRepository.getHero(parseInt(heroId))
            console.log(JSON.stringify(hero, null, 2))
            res.json(hero)
        }
        catch (err) {
            res.status(404).send(err)
        }
    }

    async addHero(req, res) {
        try {
            let hero = req.body
            hero = await heroRepository.addHero(hero)
            const urlOfNewHero = `/api/heroes/${hero.id}`
            res.location(urlOfNewHero)
            res.status(201).send("created")
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }

    async updateHero(req, res) {
        try {
            const hero = req.body

            await heroRepository.updateHero(hero)
            res.status(200).send("ok")
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    async deleteHero(req, res) {
        try {
            const heroId = req.params.id

            await heroRepository.deleteHero(heroId)
            res.status(200).send("ok")
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    async index (req, res) {
        const heroes = await heroRepository.getHeroes()

        res.render('heroes', {heroes})
    }

    async heroForm (req, res) {
        const heroId = req.params.id
        let hero;

        console.log("heroForm.heroId", heroId)

        //If heroId is not equal to new and if it is a number then get the hero to pass it to the template
        if (heroId != 'new' && !isNaN(parseInt(heroId)) ) {
            hero = await heroRepository.getHero( parseInt(heroId) )
        }

        res.render('hero-form', hero )
    }

    async postHero(req, res) {
        try {
            const hero = req.body

            if (hero.id === '') {
                await heroRepository.addHero(hero)
            } else {
                hero.id = parseInt(hero.id)
                await heroRepository.updateHero(hero)
            }
            res.redirect("/heroes")
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}

module.exports = new HeroController()