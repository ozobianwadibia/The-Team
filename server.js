//Entry point
const express = require('express');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Database Information - called once!
// require('./seeds/seed_SoccerTeamUSA_db.js');

// Syncing our sequelize models and then starting our Express app
//{force:true}
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});

// module.exports = app;