let express = require("express");

var app = express();

var port = process.env.port || 3300;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(port, function(){
    console.log(`Server is running on ${port}`);
});