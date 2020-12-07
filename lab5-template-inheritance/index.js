const express = require("express");
const hbs = require("hbs"); // <- NOTE #1
const wax = require("wax-on");

// Create the express application
let app = express();

// Tell Express which template engine to use. Template AKA views in express
// HBS is short form for "handle-bars"
app.set("view engine", "hbs");

// Enable static files
app.use(express.static("public"));

var handlebars = require('handlebars');
var helpers = require('handlebars-helpers')({
  handlebars: hbs.handlebars
});

// Setup wax on so that it will
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts")

// End express setup

// ROUTE STARTS HERE
app.get('/', (req, res) => {
    res.render('index.hbs')
})

app.get('/about', (req,res) => {
    res.render("about.hbs")
})

app.get('/characters', (req,res) => {
    res.render("characters.hbs")
})

// ROUTES END HERE
// NO CODES AFTER THIS
app.listen(3000, () => {
    console.log("Server running");
})