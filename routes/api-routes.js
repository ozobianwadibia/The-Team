const db = require('../models');

module.exports = function(app) {

    // GET route for retrieving all products
    app.get('/api/product', function(req, res) {
        // console.log(db);
        db.Product.findAll({}).then(function(dbProduct) {
            res.json(dbProduct);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

    // GET route for retrieving a single specified product
    app.get('/api/product/:id', function(req, res) {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbProduct) {
            res.json(dbProduct);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

    // PUT route for updating products
    app.put('/api/product/:id', function(req, res) {

        db.Product.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function(dbProduct) {
            res.json(dbProduct);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });


    // DELETE route for deleting products
    app.delete('/api/product/:id', function(req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbProduct) {

            res.json(dbProduct);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

}