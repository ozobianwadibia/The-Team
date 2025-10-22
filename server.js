//Entry point
const express = require("express");
const cors = require('cors');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Enable CORS for all routes
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Handle preflight requests generically (Express 5 safe)
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// First sync the database, then seed it, then start the server
db.sequelize.sync({force: true}).then(function() {
  // After syncing, seed the database
  require('./seeds/seed_SoccerTeamUSA_db.js');
  
  // Then start the server
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

// module.exports = app;
