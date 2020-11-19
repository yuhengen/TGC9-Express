const express = require("express");

// Create a new server software
let app = express()

// BEGIN ROUTES HERE

app.get("/hi/:name", (req, res) => {
    let name = req.params.name;
    res.send("Hi " + name);
})

app.get("/number/:num", (req,res) => {
    // Whatever we get as route param is ALWAYS a string
    let num = parseInt(req.params.num);
    num = num + 10;
    res.send(num+"");
})

app.get("/multiply/:numba", (req,res) => {
    // Test multiplication
    let numba = parseInt(req.params.numba);
    numba = numba * 5;
    res.send(numba+"");
})

// END ROUTES HERE

// NO CODES AFTER app.listen
// 3000 is port number
app.listen(3000, function () {
    console.log("Server started");
});