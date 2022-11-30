//Express setup
const express = require('express');
const app = express();

//Cors policy setup
const cors = require('cors');
app.use(cors());

//Path
const path = require('path');

app.use(express.urlencoded({ extended: false })); //body parser 
app.use(express.json()); //parses incoming json to the req.body

app.use(express.static(path.join(__dirname, 'build'))); //serves static files from build directory

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

//used to fetch recipes to the frontend
app.get('/recipes', cors(), function (req, res, next) {
    RecipesDB.find({}, function (err, docs) {
        if (docs) {res.json(docs)}
        if (err) {res.send(err)}
    });
})

//used to post reviews from the frontend
app.post("/reviews", function (req, res) {
    RecipesDB.update({ title: req.body.title }, 
        { $set: { reviews:req.body.reviews } }, { multi: true }, function (err, numReplaced) {});
})

//serves the index.html on any unknown routes
app.use(express.static(path.join(__dirname + "public")));

app.use(function (req, res) {
    res.status(404);
    res.send('Oops! Page not found.');
});

//port listening
app.listen(process.env.PORT || 3001, () => {
    console.log('Server started on port 3001. Ctrl^c to quit.');
});