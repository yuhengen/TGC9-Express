// SETUP
const express = require("express"); // import express
const axios = require("axios"); // import axios
const hbs = require("hbs"); // import handlebars
const wax = require("wax-on"); // import wax
const fs = require("fs"); // import in file system

// Create express application
let app = express();

// Template engine to use
app.set("view engine", "hbs");

// Enable static files
app.use(express.static("public"));

// Setup wax
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

var handlebars = require("handlebars");
var helpers = require("handlebars-helpers")({
    handlebars: hbs.handlebars
});

// Enable forms
app.use(express.urlencoded({ extended: false }));

const baseurl = "https://ckx-movies-api.herokuapp.com";
// END SETUP

// ROUTE STARTS HERE

// Display Movies
app.get('/movies', async (req,res) => {
    let response = await axios.get(baseurl + '/movies')

    res.render("all-movies.hbs", {
        'all-movies':response.data
    })
})

// Add Movies -> Go to add-movie
app.get('/movie/create', async (req,res) => {
    res.render("add-movie.hbs");
})

// Post new movies
app.post("/movie/create", async (req,res) => {
    let { movieName, moviePlot } = req.body;

    // ^ is the same as:
    // let movieName = req.body.movieName;
    // let moviePlot = req.body.moviePlot;

    let newMovie = {
        "title":movieName,
        "plot":moviePlot
    };

    let response = await axios.post(baseurl + "/movie/create", newMovie);
    res.redirect('/movies');
})

// ROUTE ENDS HERE

// NO CODES AFTER THIS
app.listen(3000, () => {
    console.log("Server running");
})