const heroTemplate = `
    <h2>Hero details:</h2>
    <table class="table table-striped" id="hero-show">
        <tbody>
        <tr>
            <td>Name</td>
            <td>{{name}}</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>{{heroType}}</td>
        </tr>
        <tr>
            <td>Quote</td>
            <td>{{quote}}</td>
        </tr>
    </tbody>
</table>`

const heroFormTemplate = `
    <header class="dialog-header">
        <h1>{{dialogTitle}}</h1>
    </header>
    <form method="post" action="/heroes">
        <input type="hidden" id="heroId" name="id" value="{{hero.id}}">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" value="{{hero.name}}" required>
        </div>
        <div class="form-group">
            <label for="quote">Quote</label>
            <input type="text" class="form-control" id="quote" name="quote"
        value="{{hero.quote}}" required>
        </div>
        <div class="form-group">
            <label for="heroType">Hero Type</label>
            <select class="form-control" id="heroType" name="heroType" required ">
                <option value=""></option>
                <option value="Prophet">Prophet</option>
                <option value="Companion">Companion</option>
                <option value="Scholar">Scholar</option>
            </select>
        </div>
        <input type="submit" class="btn btn-primary">
              
        <input type="button" class="btn btn-primary" formnovalidate onclick="closeDialog()" value="Cancel">
    </form>`

async function displayHero(heroId) {
    console.log("displayHero.heroId: ", heroId)

    try {
        const hero = await fetchHero(heroId)
        console.log(hero)

        //let studentTemplate = $('#hero-template').html(),
        let htmlTemplate = Handlebars.compile(heroTemplate)

        document.querySelector('#hero-details').innerHTML = htmlTemplate(hero)
    }
    catch (err) {
        console.log(err)
    }
}

async function updateHero(heroId) {
    console.log("heroId", heroId)
    try {
        const hero = await fetchHero(heroId)
        //console.log(hero)

        //Convert the form template to a function
        const formTemplate = Handlebars.compile(heroFormTemplate)

        let dialogTitle = "Update Hero"
        let heroDialog = document.querySelector('#hero-dialog')
        heroDialog.innerHTML = formTemplate({hero, dialogTitle})

        heroDialog.showModal()

        //$('#heroType').val(hero.heroType) // using jQuery
        //Select the current heroType in the heroType dropdown
        document.querySelector(`#heroType option[value="${hero.heroType}"]`).selected = true
        //console.log(document.querySelector('#heroType').value )
    }
    catch (err) {
        console.log(err)
    }
}

function addHero() {
    //Convert the form template to a function
    const formTemplate = Handlebars.compile(heroFormTemplate)

    let dialogTitle = "Add Hero"
    let heroDialog = document.querySelector('#hero-dialog')
    heroDialog.innerHTML = formTemplate({ dialogTitle })

    heroDialog.showModal()
}

function closeDialog() {
    document.querySelector('#hero-dialog').close()
}

async function deleteHero(heroId) {
    // Ask the user to confirm. If they cancel the request then exit this function
    if (!confirm('Confirm delete?')) {
        return
    }

    //Get the data-heroId custom attribute associated with the clicked Link
    //Note this refers to the link that was clicked (i.e., the source of the click event)
    try {
        console.log("deleteHero.heroId: ", heroId)

        let url = `/api/heroes/${heroId}`
        console.log("deleteHero.heroId", heroId)

        //After successful delete remove the row from the HTML table
        //This line should be after fetch but it does not work if I do so
        //$(this).closest('tr').remove()
        //this.parentNode.parentNode.removeChild()
        const heroesTable = document.querySelector(`#heroesTable tbody`)
        const trToDelete = heroesTable.querySelector(`tr[data-heroid="${heroId}"]`)
        heroesTable.removeChild(trToDelete)

        console.log(trToDelete)

        await fetch(url, {method: 'delete'})
    }
    catch (err) {
        console.log(err)
    }
}

async function fetchHero(heroId) {
    let url = `/api/heroes/${heroId}`
    const response = await fetch(url)
    return await response.json()
}