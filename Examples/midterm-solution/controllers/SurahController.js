const surahRepository = require('./../models/SurahRepository')

class SurahController {

    async surahExplorer(req, res) {
        const surahs = await surahRepository.getSurahs()
        res.render('surahExplorer', { surahs })
    }

    async getSurah(req, res) {
        try {
            const surah = await surahRepository.getSurah(req.params.id)
            res.json(surah)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    async searchSurahForm(req,res){
        res.render('surahSearch')
    }

    async searchSurah(req,res){
        const searchParams = req.body
        const surahs = await surahRepository.searchSurahs(searchParams.type, searchParams.ayaCount)
        res.render('surahSearch', { searchParams , surahs })
    }
}

module.exports = new SurahController()