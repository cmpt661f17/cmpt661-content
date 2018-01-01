surahTemplate=`<h4>Selected Surah:</h4>
    <table class="table table-striped">
        <tbody>
        <tr>
            <td>Surah Id</td>
            <td>{{surah.id}}</td>
        </tr>
        <tr>
            <td>Name </td>
            <td>{{surah.name}}</td>
        </tr>
        
        <tr>
            <td>English name </td>
            <td>{{surah.englishName}}</td>
        </tr>
        
        <tr>
            <td>Aya Count </td>
            <td>{{surah.ayaCount}}</td>
        </tr>
        
         <tr>
            <td>Type  </td>
            <td>{{surah.type}}</td>
        </tr>
        
        </tbody>
    </table>`


document.addEventListener("DOMContentLoaded", () => {
    if ( document.querySelector('#surahDropdown') != null)
        document.querySelector('#surahDropdown').addEventListener("change", onSurahListChange);
})


async function getSurah(surahId) {
    const url = `/api/surahs/${surahId}`
    const response = await fetch(url)
    return await response.json()
}


async function onSurahListChange(e) {

    const selectedSurah = this.value

    if (!selectedSurah) {
        document.querySelector('#surahDetails').innerHTML = ''
        return;
    }

    try {
        const surah = await getSurah(selectedSurah);
        const htmlTemplate = Handlebars.compile(surahTemplate)
        let htmlContent;
        htmlContent = htmlTemplate({surah})
        document.querySelector('#surahDetails').innerHTML = htmlContent
    }
    catch (err) {
        console.log(err)
    }
}

