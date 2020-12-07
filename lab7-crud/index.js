const express = require("express");
const hbs = require("hbs"); // <- NOTE #1
const wax = require("wax-on");
const axios = require("axios");

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

const baseURL = "https://petstore.swagger.io/v2";

// ROUTE STARTS HERE

// ROUTES END HERE


// NO CODES AFTER THIS
app.listen(3000, () => {
    console.log("Server running");
})