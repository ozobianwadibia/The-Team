const db = require('../models');

module.exports = function(app) {

    // GET route for retrieving all players
    app.get('/api/player', async function(req, res, next) {
        try {
            const players = await db.SoccerTeamUSA.findAll({});
            res.json(players);
        } catch (error) {
            next(error);
        }
    });

    // GET route for retrieving a single specified player
    app.get('/api/player/:id', async function(req, res, next) {
        try {
            const player = await db.SoccerTeamUSA.findOne({
                where: { id: req.params.id },
            });
            if (!player) return res.status(404).json({ error: 'Not Found' });
            res.json(player);
        } catch (error) {
            next(error);
        }
    });

    // PUT route for updating players
    app.put('/api/player/:id', async function(req, res, next) {
        try {
            const [count] = await db.SoccerTeamUSA.update(req.body, {
                where: { id: req.params.id }
            });
            if (count === 0) return res.status(404).json({ error: 'Not Found' });
            const updated = await db.SoccerTeamUSA.findOne({ where: { id: req.params.id } });
            res.json(updated);
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    error: 'Validation failed',
                    details: error.errors.map(e => ({ field: e.path, message: e.message }))
                });
            }
            next(error);
        }
    });

    // POST route for creating players
    app.post('/api/player', async (req, res, next) => {
        try {
            const created = await db.SoccerTeamUSA.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                age: req.body.age,
                jersey_number: req.body.jersey_number,
                soccer_club: req.body.soccer_club,
                position_played: req.body.position_played
            });
            res.status(201).json(created);
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({
                    error: 'Validation failed',
                    details: error.errors.map(e => ({ field: e.path, message: e.message }))
                });
            }
            next(error);
        }
    });

    // DELETE route for deleting players
    app.delete('/api/player/:id', async function(req, res, next) {
        try {
            const count = await db.SoccerTeamUSA.destroy({ where: { id: req.params.id } });
            if (count === 0) return res.status(404).json({ error: 'Not Found' });
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    });
}