"use strict";

var express = require("express");
var exphbs = require("express-handlebars");
var burgerController = require("./controllers/burgers_controller");
var app = express();

var PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));


app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars view engine.
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(burgerController);