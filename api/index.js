//Express setup
const express = require('express');
const app = express();

//Cors policy setup
const cors = require('cors');
app.use(cors());

//DB setup
var Datastore = require('nedb')
  , db = new Datastore({ filename: './db/recipes.db', autoload: true });

//Seeding DB
var recipeSeed = require('./db/recipesSeed');
db.insert(recipeSeed, function(err) {});

app.get('/', function(req, res) {
    res.send('Hello! Welcome to my application.');
});

app.get('/recipes', cors(), function (req, res, next) {
    db.find({}, function (err, docs) {
        if (docs) {res.json(docs)}
        if (err) {res.send(err)}
    });
})

app.use(function (req, res) {
    res.status(404);
    res.send('Oops! Page not found.');
});

app.listen(3001, () => {
    console.log('Server started on port 3001. Ctrl^c to quit.');
});