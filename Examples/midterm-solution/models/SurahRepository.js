class SurahRepository {

    async getSurahs() {
        const fetch = require('node-fetch')
        const url = 'https://cmpt661f17.github.io/surah.json'
        const response = await fetch(url)
        const surahs = await response.json()
        return surahs
    }

    async getSurah(surahId) {
        const surahs = await this.getSurahs()
        const surah = surahs.find(s => s.id == surahId)
        return surah
    }

    async searchSurahs(type, ayatCount){
        let surahs = await this.getSurahs()
        console.log(type, ayatCount)
        ayatCount = parseInt(ayatCount)
        surahs = surahs.filter( s => (s.type == type || type === 'All') && s.ayaCount >= ayatCount )
        return surahs
    }

    }

module.exports = new SurahRepository()