let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

let handlebars = require('express-handlebars');

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let router = require('./controllers/burgers_controller.js')

app.use(router);

app.listen(port, ()=> {
    console.log("listening on " + port)
})