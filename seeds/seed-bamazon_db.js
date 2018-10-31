// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
    db.Product.bulkCreate([{
            product_name: 'Computers',
            department_name: 'Electronics',
            price: 990,
            stock_quantity: 1500
        },
        {
            product_name: 'GPS Radios',
            department_name: 'Electronics',
            price: 250,
            stock_quantity: 250

        },
        {
            product_name: 'Plasma TV',
            department_name: 'Electronics',
            price: 1200,
            stock_quantity: 180
        },
        {
            product_name: 'PS4',
            department_name: 'Electronics',
            price: 299,
            stock_quantity: 190
        },
        {
            product_name: 'The Shining',
            department_name: 'Books',
            price: 11,
            stock_quantity: 1000
        },
        {
            product_name: 'Java Programming',
            department_name: 'Books',
            price: 16,
            stock_quantity: 1000
        },
        {
            product_name: 'Education 101',
            department_name: 'Books',
            price: 15,
            stock_quantity: 200
        },
        {
            product_name: 'Layo T-shirts',
            department_name: 'Clothing',
            price: 14,
            stock_quantity: 2000
        },
        {
            product_name: 'Fubu Cap',
            department_name: 'Clothing',
            price: 9,
            stock_quantity: 600
        },
        {
            product_name: 'Wrangler Jeans',
            department_name: 'Clothing',
            price: 20,
            stock_quantity: 460
        }
    ]).then(function(response) {
        console.log('Data successfully added!');
    }).catch(function(error) {
        console.log('Error', error);
    });
});