// NPM Packages
let express = require("express");
const fs = require("fs");

// Assigns app to Express function which creates an Express server. 
var app = express();

// Port the server is opened on.
var port = process.env.port || 3300;

// Middleware for the server which performs methods, functions, operations which processes the request and sending in the app.
// Here it's "POST'ing" or/and "PUT'ing" to the server.
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static("public"));

// Routes for the API 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(port, function(){
    console.log(`Server is running on ${port}`);
});

