const database = require('../database');

const Product = require('./Product'); 
const Salesperson = require('./Salesperson'); 
const Customer = require('./Customer'); 
const Sales = require('./Sales'); 
const Discount = require('./Discount'); 

Product.hasMany(Discount, {
    foreignKey: 'product_id',
});

Product.hasMany(Sales, {
    foreignKey: "product_id",
});

Customer.hasMany(Sales, {
    foreignKey: "customer_id",
});

Sales.belongsTo(Product, {
    foreignKey: "product_id",
});

Sales.belongsTo(Customer, {
    foreignKey: "customer_id",
});

Sales.belongsTo(Salesperson, {
    foreignKey: "salesperson_id",
});

Salesperson.hasMany(Sales, {
    foreignKey: "salesperson_id",
});

database
    .sync()
    .then((result) => {
        console.log(result);
        console.log("Database Synced!")
    })
    .catch((err) => {
        console.log("Something went wrong...")
        console.log(err);
    });


 const models = {
    Product,
    Salesperson,
    Customer,
    Sales,
    Discount
}

module.exports = models;
