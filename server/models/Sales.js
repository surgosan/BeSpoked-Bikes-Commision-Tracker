const { DataTypes } = require('sequelize');
const database = require('../database');

const Sales = database.define('Sales',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        salesperson_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sales_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    },
    {
        timestamps: false,
        modelName: 'Sales',
    }
); 

module.exports = Sales; 