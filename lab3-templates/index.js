const express = require("express");
const hbs = require("hbs"); // <- NOTE #1

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

// EXPRESS SETUP ENDS HERE
// ROUTES BEGIN HERE

app.get("/", (req, res) => {
    res.render("index.hbs");
})

app.get("/hi/:name", (req, res) => {
    let name = req.params.name;
    let luckyNumber = Math.floor(Math.random() * 100)
    res.render("hi.hbs", {
        "username":name,
        "luckyNumber": luckyNumber
    })
})

app.get('/animal/adopt', (req,res)=> {
    let animals = ["atlas","bear","cat","dog"];
    res.render("adopt.hbs", {
        "animals":animals
    })
})

app.get('/animal/:choice', (req,res)=>{
   let choice = req.params.choice;
    res.render('picture.hbs', {
       'animal_choice':choice
    })
})

// ROUTES END HERE
// NO CODES AFTER THIS
app.listen(3000, () => {
    console.log("Server running");
})