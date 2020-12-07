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
// END SETUP

// ROUTE STARTS HERE
app.get("/habits", (req, res) => {
    // first argument is RELATIVE path to the file
    const data = fs.readFileSync("./data.json", {
        "encoding": "utf8"
    });

    // Convert JSON string to JSON object
    const database = JSON.parse(data);
    // CHECK
    // for (let record of database) {
    //     console.log(record.id,record.name,record.count);
    // }
    // res.send("done")
    
    res.render("habits.hbs", {
        "habits":database
    })
})

// Show form

// Process form

// ROUTE ENDS HERE

// NO CODES AFTER THIS
app.listen(3000, () => {
    console.log("Server running");
})