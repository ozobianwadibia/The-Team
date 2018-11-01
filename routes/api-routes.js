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

    // POST route for creating products
    app.post('/api/product', (req, res) => {
        const product_name = req.body.product_name;
        const department_name = req.body.department_name;
        const price = req.body.price;
        const stock_quantity = req.body.stock_quantity;
        db.Product.create({
            product_name: product_name,
            department_name: department_name,
            price: price,
            stock_quantity: stock_quantity
        }).then(Product => {
            res.json(Product);
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