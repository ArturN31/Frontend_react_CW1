//Express setup
const express = require('express');
const app = express();

//Cors policy setup
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: false })); //body parser 
app.use(express.json()); //parses incoming json to the req.body

//DB setup
var Datastore = require('nedb')
  , RecipesDB = new Datastore({ filename: './db/recipes.db', autoload: true });

RecipesDB.ensureIndex({ fieldName: 'title', unique: true }, function (err) {});

//Seeding DB
var recipeSeed = require('./db/recipesSeed');
RecipesDB.find({}, function (err, docs) {
    if (docs) {
        RecipesDB.insert(recipeSeed, function(err) {}); 
    }
}); 

app.get('/', function(req, res) {
    res.send('Hello! Welcome to my application.');
});

//used to fetch recipes to the frontend
app.get('/recipes', cors(), function (req, res, next) {
    RecipesDB.find({}, function (err, docs) {
        if (docs) {res.json(docs)}
        if (err) {res.send(err)}
    });
})

app.get('/rating', function(req, res) {
    res.send('Ratings.');
});

//used to post ratings from the frontend
app.post("/rating", function (req, res) {
    RecipesDB.update({ title: req.body.title }, 
        { $set: { title: req.body.title, 
        ingredients: req.body.ingredients, 
        servings: req.body.servings, 
        instructions: req.body.instructions, 
        rating: req.body.rating,
        _id: req.body.id } }, { multi: true }, function (err, numReplaced) {});
})

app.use(function (req, res) {
    res.status(404);
    res.send('Oops! Page not found.');
});

app.listen(3001, () => {
    console.log('Server started on port 3001. Ctrl^c to quit.');
});