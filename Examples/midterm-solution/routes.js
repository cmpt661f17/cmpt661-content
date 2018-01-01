const express = require('express')
const router = express.Router()

const surahController = require('./controllers/SurahController')

router.get('/' , surahController.surahExplorer)
router.get('/api/surahs/:id' , surahController.getSurah)

router.route('/surahs')
    .get(surahController.searchSurahForm)
    .post(surahController.searchSurah)

module.exports = router