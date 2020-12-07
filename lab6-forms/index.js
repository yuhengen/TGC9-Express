const express = require("express");
const hbs = require("hbs"); // <- NOTE #1
const wax = require("wax-on");

// Create the express application
let app = express();

// Tell Express which template engine to use. Template AKA views in express
// HBS is short form for "handle-bars"
app.set("view engine", "hbs");

// Enable Forms
app.use(express.urlencoded({ extended: false }));

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

app.get('/add-food', (req, res) => {
    res.render("add-food.hbs")
})

app.post('/add-food', (req, res) => {
    console.log(req.body);

    let tags = Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags];

    res.send(req.body);
})

app.get('/calculate_bmi', (req, res) => {
    res.render("calculate_bmi.hbs");
})

app.post('/calculate_bmi', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = parseFloat(weight / (height * height)).toFixed(2);

    res.render("display_bmi.hbs", {
        weight,
        height,
        bmi
    });
})

app.get('/fruits', (req, res) => {
    res.render("fruits.hbs");
})

app.post('/fruits', (req, res) => {
    console.log(req.body);
    let items = req.body.items;

    let total = 0;
    if (items.includes("durian")) {
        total += 15;
    }
    if (items.includes("apple")) {
        total += 3;
    }
    if (items.includes("orange")) {
        total += 6;
    }
    if (items.includes("banana")) {
        total += 4;
    }

    res.render("display_fruits.hbs", {
        items,
        total
    })
})
// ROUTES END HERE


// NO CODES AFTER THIS
app.listen(3000, () => {
    console.log("Server running");
})