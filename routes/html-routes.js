// Dependencies

const path = require('path');

// Routes 
module.exports = function(app) {
    // index route loads view.html
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // team route loads team.html
    app.get('/team', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/team.html'));
    });

};