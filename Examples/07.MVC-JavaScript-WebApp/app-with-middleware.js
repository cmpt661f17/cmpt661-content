let express = require('express')
let app = express()

//Define a middleware function
function logger (req, res, next) {
    req.requestTime = new Date()
    console.log(`Request received from '${req.hostname}' at ${req.requestTime}`)
    next()
}

// Attach it to the app
app.use(logger);

app.get('/', (req, res) => {
    let responseText = `السلام عليكم ورحمة الله وبركاته<br>
        Requested at: ${req.requestTime}`
    res.send(responseText)
})

let port = 3000
app.listen(port, () => {
    let host = "localhost"
    console.log(`App is running and available @ http://${host}:${port}`)
})