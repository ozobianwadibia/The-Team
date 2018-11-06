const db = require('../models');

module.exports = function(app) {

    // GET route for retrieving all players
    app.get('/api/player', function(req, res) {
        // console.log(db);
        db.SoccerTeamUSA.findAll({}).then(function(dbSoccerTeamUSA) {
            res.json(dbSoccerTeamUSA);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

    // GET route for retrieving a single specified player
    app.get('/api/player/:id', function(req, res) {
        db.SoccerTeamUSA.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbSoccerTeamUSA) {
            res.json(dbSoccerTeamUSA);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

    // PUT route for updating players
    app.put('/api/player/:id', function(req, res) {
        db.SoccerTeamUSA.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function(dbSoccerTeamUSA) {
            res.json(dbSoccerTeamUSA);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

    // POST route for creating players
    app.post('/api/player', (req, res) => {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const age = req.body.age;
        const jersey_number = req.body.jersey_number;
        const soccer_club = req.body.soccer_club;
        const position_played = req.body.position_played;

        db.SoccerTeamUSA.create({
            first_name: first_name,
            last_name: last_name,
            age: age,
            jersey_number: jersey_number,
            soccer_club: soccer_club,
            position_played: position_played
        }).then(SoccerTeamUSA => {
            res.json(SoccerTeamUSA);
        });
    });

    // DELETE route for deleting players
    app.delete('/api/player/:id', function(req, res) {
        db.SoccerTeamUSA.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbSoccerTeamUSA) {
            res.json(dbSoccerTeamUSA);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });
}