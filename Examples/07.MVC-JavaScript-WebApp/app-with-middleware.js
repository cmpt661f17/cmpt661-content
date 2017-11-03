const express = require('express')
const app = express()

//Define a middleware function
function logger (req, res, next) {
    req.requestTime = new Date()
    console.log(`Request received from '${req.hostname}' at ${req.requestTime}`)
    next()
}

// Attach it to the app
app.use(logger);

app.get('/', (req, res) => {
    const responseText = `السلام عليكم ورحمة الله وبركاته<br>
        Requested at: ${req.requestTime}`
    res.send(responseText)
})

const port = 4000
app.listen(port, () => {
    const host = "localhost"
    console.log(`App is running and available @ http://${host}:${port}`)
})