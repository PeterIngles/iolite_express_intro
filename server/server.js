// Require express to get access to functionality for builsing a server
const express = require('express')

// app
const app = express();
const port = 5000;

// At local host 5000, this will deliver to the browser some static code
    // Allows express to deliver our home page
app.use(express.static('server/public'))

let quoteList = "This is the quote list"
let tacoCat = "It's me the taco cat"

app.get('/quotes', (req, res) =>{
    console.log("arrived at /quotes")

    res.send(quoteList)
})

app.get('/tacoCat', (req, res) =>{
    console.log("arrived at /tacoCat")

    res.sendStatus(200)
})


// Port binding
app.listen(port, () => {
    console.log('listening on port', port)
})