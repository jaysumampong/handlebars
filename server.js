let express = require("express");
let mysql = require("mysql");
let exphbs = require("express-handlebars");
let methodOverride = require("method-override");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({
    exended: false
}))
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

let PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("now listening at" + PORT);
});

let routes = require("./controllers/burgers_controllers.js");
app.use(routes);
