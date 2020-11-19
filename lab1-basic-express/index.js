const express = require("express");

// Express is a function that will create a new express object
// One express object represents one server (application/software)
let app = express();

// TYPE YOUR CODES HERE

app.get('/', function (request, response) {
    // Request is what the client send us
    // Response is what we (The server software) will send back
    response.send("Hello World");
})

app.get('/about-us', (req, res) => {
    let luckyNumber = Math.floor(Math.random() * 100);
    res.send("<h1>About Us</h1><p>We are the ultimate adventurers! Your lucky number today is: " + luckyNumber + "</p>")
})

// NO CODES AFTER app.listen
// 3000 is port number
app.listen(3000, function () {
    console.log("Server started");
});